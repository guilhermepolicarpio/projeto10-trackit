import TopApp from './top/topApp'; 
import Footer from './Footer'
import styled from 'styled-components';
import CreateHabits from './CreateHabits';
import { useState,useContext,useEffect } from "react";
import UserContext from './UserContext';
import axios from 'axios';
import Delete from "../images/Group.png"

export default function Habits({userinfo}){

    const [habits, setHabits] = useState([]);
    const [AddHabits, setAddHabits] = useState(false);
    const { userInfo } = useContext(UserContext);
    const [reload,SetReload] = useState(false);
    
    
    useEffect(() => {        

        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`,
            }
        }

        let promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);
        promise.then((response) => {
            setHabits([...response.data]);
            SetReload(true)
            console.log(reload)
        });
    },[])

       
    return(
        <>
         <TopApp/>
         <Initial>
                <strong><h1>Meus hábitos</h1></strong>
                <button onClick={() => setAddHabits(!AddHabits)}><p>+</p></button>
        </Initial>
        
        {AddHabits ? <CreateHabits/> : <></>}
        {reload  ? 
                        listHabits({habits,userInfo,SetReload,reload})
                        : 
                        <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>}
         <Footer/>
        </>
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
                SetReload(!reload)
            })
        
        }
    }
    
    return(
    <HabitsContainer>
    {habits.map((habit) =>
            <Habit key={habit.id}>
                <p>{habit.name}</p>
                <Weekdays>
                    <Weekday background={() => paintWeekday(0, habit)} color={() => paintFont(0, habit)}>D</Weekday>
                    <Weekday background={() => paintWeekday(1, habit)} color={() => paintFont(1, habit)}>S</Weekday>
                    <Weekday background={() => paintWeekday(2, habit)} color={() => paintFont(2, habit)}>T</Weekday>
                    <Weekday background={() => paintWeekday(3, habit)} color={() => paintFont(3, habit)}>Q</Weekday>
                    <Weekday background={() => paintWeekday(4, habit)} color={() => paintFont(4, habit)}>Q</Weekday>
                    <Weekday background={() => paintWeekday(5, habit)} color={() => paintFont(5, habit)}>S</Weekday>
                    <Weekday background={() => paintWeekday(6, habit)} color={() => paintFont(6, habit)}>S</Weekday>
                </Weekdays>
                <img src={Delete} alt="deletar" onClick={() => deleteHabit(habit.id)}/>
            </Habit>
    )}
    </HabitsContainer>   )
}

function paintWeekday(dayNumber, habit){
        
    if(habit.days.includes(dayNumber)){
        return "#cfcfcf";
    }else{
        return "#ffffff";
    }
}

function paintFont(dayNumber, habit){
    
    if(habit.days.includes(dayNumber)){
        return "#ffffff";
    }else{
        return "#dbdbdb";
    }
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
}

`;

const HabitsContainer = styled.div`
    width: 90%;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
`;

const Habit = styled.div`
    width: 340px;
    height: 91px;
    background-color: #ffffff;
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
        
    }
`;
const Weekdays = styled.div`
    display: flex;
    justify-content: space-between;
    width: 235px;
    margin-top: 10px;
`;

const Weekday = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${props => props.background};
    color: ${props => props.color};
    border: 1px solid #D5D5D5;
    border-radius: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;