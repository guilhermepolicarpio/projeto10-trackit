import TopApp from './top/topApp'; 
import Footer from './Footer'
import styled from 'styled-components';
import CreateHabits from './CreateHabits';
import { useNavigate } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import UserContext from './UserContext';
import axios from 'axios';
import Delete from "../images/Group.png"
import { getHabit } from '../services/trackit';

export default function Habits({userinfo}){

    const [habits, setHabits] = useState([]);
    const {userInfo,reload,SetReload,AddHabits, setAddHabits } = useContext(UserContext);
        
    let navigate = useNavigate();

    useEffect(() => {    
       
        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`,
            }
        }

        getHabit(config).then((response) => {
            setHabits([...response.data]);
            SetReload(true)
        });

        getHabit(config).catch((res)=>{
            alert (`Sua sessão expirou! Erro ${res.response.status}!`)
            navigate("../")
        });
       
    },[reload,userInfo.token,navigate])
    
    return(
        <Box>
         <TopApp/>
         <Initial>
                <strong><h1>Meus hábitos</h1></strong>
                <button onClick={() => setAddHabits(!AddHabits)}><p>+</p></button>
        </Initial>
        
        {AddHabits ? <CreateHabits/> : <></>}
        {habits.length !==0  ? 
                    listHabits({habits,userInfo,SetReload,reload})
                    : 
                    <NoHabit>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</NoHabit>}
         <Footer/>
        </Box>
    )
}

function listHabits({habits,userInfo,SetReload,reload}){
    
    function deleteHabit(id){       
        if(window.confirm("Tem certeza que deseja apagar o hábito?")){
            const config = {
                headers: {
                    "Authorization": `Bearer ${userInfo.token}`,
                }
            }
            let promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
            promise.then(() => {
                SetReload(false)
            })
        }
    }
    
    return(
     <>
    {reload ?
        (
    <HabitsContainer>
    {habits.map((habit) =>
            <Habit key={habit.id}>
                <p>{habit.name}</p>
                <Weekdays>
                    <Weekday background={() => changeBackcolor(0, habit)} color={() => paintFont(0, habit)}>D</Weekday>
                    <Weekday background={() => changeBackcolor(1, habit)} color={() => paintFont(1, habit)}>S</Weekday>
                    <Weekday background={() => changeBackcolor(2, habit)} color={() => paintFont(2, habit)}>T</Weekday>
                    <Weekday background={() => changeBackcolor(3, habit)} color={() => paintFont(3, habit)}>Q</Weekday>
                    <Weekday background={() => changeBackcolor(4, habit)} color={() => paintFont(4, habit)}>Q</Weekday>
                    <Weekday background={() => changeBackcolor(5, habit)} color={() => paintFont(5, habit)}>S</Weekday>
                    <Weekday background={() => changeBackcolor(6, habit)} color={() => paintFont(6, habit)}>S</Weekday>
                </Weekdays>
                <img src={Delete} alt="deletar" onClick={() => deleteHabit(habit.id)}/>
            </Habit>
    )}
    </HabitsContainer>  ) 
    :
    (<></>)}</>)
}

function changeBackcolor(dayNumber, habit){    
    if(habit.days.includes(dayNumber)){  return "#cfcfcf";   }
    else{  return "#ffffff";  }
}

function paintFont(dayNumber, habit){
    if(habit.days.includes(dayNumber)){  return "#ffffff";   }
    else{  return "#dbdbdb";   }
}

const Initial= styled.div`

    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    padding: 0px 17px 0px 17px;

h1{
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
}

button{
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    border-color: #52B6FF;

p{
    font-size: 22.976px;
    text-align: center;
    color: #FFFFFF;
}
}`;

const HabitsContainer = styled.div`
    width: 340px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Habit = styled.div`
    width: 340px;
    height: 91px;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 0 15px;
    margin-bottom: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    img{
        width: 14px;
        position: absolute;
        top: 10px;
        right: 10px;
        
    }`;

const Weekdays = styled.div`
    display: flex;
    justify-content: space-between;
    width: 235px;
    margin-top: 10px;
`;

const Weekday = styled.div`
    width: 30px;
    height: 30px;
    background: ${props => props.background};
    color: ${props => props.color};
    border: 1px solid #D5D5D5;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NoHabit= styled.div`
    font-size: 18px;
    line-height: 22px;
    color: #000000;
    padding: 10px 10px 0px 10px;
    text-align: center;
`;

const Box = styled.div`
background: #E5E5E5;
position: absolute;
height: 100%;
width:100%;
`;