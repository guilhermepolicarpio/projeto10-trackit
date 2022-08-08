import styled from 'styled-components';
import React from 'react';
import { ThreeDots } from  'react-loader-spinner';
import { useState } from "react";
import axios from 'axios';
import { useContext } from "react";
import UserContext from './UserContext';

export default function CreateHabits(){
    const {userInfo,SetReload, AddHabits, setAddHabits} = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [days, setDays] = useState([false,false,false,false,false,false,false,]);
    const [habit, setHabit] = useState({
        name: "",
        days: [],
    })

    function toggleWeekday(dayIndex){       
        if(days[dayIndex] === false){
            setDays(days.map((day,index) =>  index === dayIndex ? true : day
            ));
        }else{
            setDays(days.map((day,index) =>  index === dayIndex ? false : day
            ));
        }   
    }

function addHabit () {
        
    let Days = days.map((day, index) => day ? index : null).filter(day => day !== null);

    if(habit.name===""){
        window.alert("Nome do hábito está em branco")
        return
    }

    if(Days.length===0){
        window.alert("Não foi selecionado nenhum dia!")
       return
    }
    const objHabit = {
        name: habit,
        days: Days,
    }

    const config = {
        headers: {
            "Authorization": `Bearer ${userInfo.token}`,
        }
    }

    setLoading(true) 
    let promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", objHabit, config);
    promise.then(() => {
        setLoading(false) 
        SetReload(false)
        setAddHabits(false)
       
    })
};

    function changeBackColor(dayIndex){
        if(days[dayIndex] === true){
            return "#cfcfcf";
        }else{
            return "#FFFFFF";
        }
    }

    function paintFont(dayIndex){
        if(days[dayIndex] === true){
            return "#FFFFFF";
        }else{
            return "#DBDBDB";
        }
    }

    return(
        
        <NewHabitContainer>
          <input onChange={e => setHabit(e.target.value)} placeholder="nome do hábito" />
        <Weekdays>
            <Weekday onClick={() => toggleWeekday(0)} background={() => changeBackColor(0)} color={() => paintFont(0)}>D</Weekday>
            <Weekday onClick={() => toggleWeekday(1)} background={() => changeBackColor(1)} color={() => paintFont(1)}>S</Weekday>
            <Weekday onClick={() => toggleWeekday(2)} background={() => changeBackColor(2)} color={() => paintFont(2)}>T</Weekday>
            <Weekday onClick={() => toggleWeekday(3)} background={() => changeBackColor(3)} color={() => paintFont(3)}>Q</Weekday>
            <Weekday onClick={() => toggleWeekday(4)}  background={() => changeBackColor(4)} color={() => paintFont(4)}>Q</Weekday>
            <Weekday onClick={() => toggleWeekday(5)}  background={() => changeBackColor(5)} color={() => paintFont(5)}>S</Weekday>
            <Weekday onClick={() => toggleWeekday(6)}  background={() => changeBackColor(6)} color={() => paintFont(6)}>S</Weekday>
        </Weekdays>
    <Buttons>
        <button onClick={() => setAddHabits(!AddHabits)} >Cancelar</button>
        <button onClick={addHabit}>{loading ? <ThreeDots color="white" height={40} width={40} /> : <p>Salvar</p> }</button>
    </Buttons>
        </NewHabitContainer> 
    )
}

const NewHabitContainer = styled.div`
    width: 340px;
    margin: 0 auto;
    height: 180px;
    background-color: #ffffff;
    flex-direction: column;
    border-radius: 5px;
    padding: 15px;
    margin: 0 auto;
    margin-bottom:20px;
    display: flex;
    input{
        width: 100%;
        height: 45px;
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        font-size: 20px;
        line-height: 25px;
        padding-left: 15px;
        margin-bottom: 6px;
    }
`;

const Weekdays = styled.div`
display: flex;
justify-content: space-between;
width: 75%;
margin-top: 8px;
`;

const Buttons = styled.div`
display: flex;
justify-content: flex-end;
margin-top: 20px;
    
    button:first-child{
        border: none;
        background-color: #ffffff;
        width: 84px;
        height: 35px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #52B6Fa;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button:last-child{
        border: none;
        width: 84px;
        height: 35px;
        background: #52B6FF;
        border-radius: 5px;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Weekday = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props => props.background};
    color: ${props => props.color};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
`;