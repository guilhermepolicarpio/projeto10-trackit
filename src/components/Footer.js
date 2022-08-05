
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Footer(){
    return(
    <FooterBox>
        <Link to='/habitos'><p>Hábitos</p></Link>
        <Progressbar>
            <Link to="/hoje">
            <CircularProgressbar
                value="50"
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
                strokeLinecap: "round",
                })}text={'Hoje'}>
                  <p>Hoje</p>
                </CircularProgressbar></Link>
            </Progressbar>
        <Link to='/historico'><p>Histórico</p></Link>
    </FooterBox>
    )
}

const FooterBox= styled.div`
width: 375px;
height: 70px;
position: fixed;
top: 600px;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;

p{
font-size: 17.976px;
line-height: 22px;
text-align: center;
color: #52B6FF;
}
`;

const Progressbar = styled.div`
position: absolute;
bottom: 10px;
left: 50%;
transform: translateX(-50%); 
width: 91px;
height:92px;
`;