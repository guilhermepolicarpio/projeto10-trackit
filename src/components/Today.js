
import styled from 'styled-components';
import TopApp from './top/topApp'; 
import Footer from './Footer'
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';
import UserContext from './UserContext';
import { useContext,useEffect } from "react";
import { doneHabit,undoneHabit,getTodayHabit } from '../services/trackit';


export default function Today({userinfo}){

    const days = dayjs().locale('pt-br').format('dddd, DD/MM');
    const now = days[0].toUpperCase() + days.substring([1]);
    const {userInfo,reload,SetReload,progress, setProgress,Todaylist, setTodaylist} = useContext(UserContext);

    useEffect(() => {

        const config = {
            headers: {
                "Authorization": `Bearer ${userInfo.token}`,
            }
        }

        getTodayHabit(config).then((res)=>{
            setTodaylist(res.data)
            SetReload(true)
        });

        if(Todaylist.length >0) {
          let total = ((Todaylist.filter(habit => habit.done === true).length / Todaylist.length) * 100).toFixed(0);
          console.log(total)
          setProgress(total);
        }
        
      }, [Todaylist,userInfo.token,SetReload,setProgress,setTodaylist]);

    function checkHabit(habit) {
        console.log("oi")
        if(habit.done===true) {
            const config = {
                headers: {
                    "Authorization": `Bearer ${userInfo.token}`,
                }
            }
            undoneHabit(habit.id,config).then(()=>{
                SetReload(!reload)  
            });
        } else {
            
            const config = {
                headers: {
                    "Authorization": `Bearer ${userInfo.token}`,
                }
            }
            doneHabit(habit.id,config).then(()=>{
                SetReload(!reload)
            });
        }
    }

    return(
        <Box>
        <TopApp/>
        <StatusToday>
            <h2>{now}</h2>
            {progress=== 0 ? <h1> Nenhum hábito concluído ainda</h1> : <h3>{progress}% dos hábitos concluídos </h3>}
        </StatusToday>

        {Todaylist.map((habit, index)=>
            < HabitBox key={index}>
            <h2>{habit.name}</h2>
            <p>Sequência atual: {habit.currentSequence} dias</p>
            <p>Seu recorde: {habit.highestSequence} dias</p>
            <Button onClick ={()=>checkHabit(habit)} background={()=>checkBackground(habit)} ><ion-icon name='checkmark-sharp'></ion-icon></Button>
            </HabitBox>
        )}
        <Footer/>
        </Box>
    )
}

function checkBackground(habit){
    if(habit.done === true){
        return "#8FC549";
    }else{
        return "#ebebeb";
    }
}

const StatusToday= styled.div`
    padding: 20px 18px;
h2{
    color: #126BA5;
    font-size: 22.976px;
    line-height: 29px;
}

h1{
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;  
}

h3{
    font-size: 17.976px;
    line-height: 22px;
    color: #8FC549;
}
`;

const HabitBox = styled.div`
    width: 340px;
    height: auto;
    margin: 0px auto;
    margin-bottom: 10px;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    border-radius: 5px;
    padding: 16px 0px 16px 15px;
    word-break: break-all;
    position: relative;
    h2 {
        font-size: 20px;
        margin-bottom: 10px;
    }
    p {
        font-size: 13px;
    }

`;

const Button = styled.div`
width: 70px;
height: 70px;
position: absolute;
top: 10%;
right: 3%;
background:  ${props => props.background};
border: 1px solid #EBEBEB;
border-radius: 5px;
ion-icon {
    width: 100%;
    height: 100%;
    color: #FFFFFF;
}
`;

const Box = styled.div`
background: #E5E5E5;
position: absolute;
height: 100%;
width:100%;
`;