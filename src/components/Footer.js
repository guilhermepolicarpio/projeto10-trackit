
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Footer(){
    return(
    <FooterBox>
        <Link to='/habitos'><span>Hábitos</span></Link>
        <Link to='/historico'><span>Histórico</span></Link>
    </FooterBox>
    )
}

const FooterBox= styled.div`
width: 375px;
height: 70px;
position: fixed;
background: #FFFFFF;
display: flex;
align-items: center;
justify-content: space-between;
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
text-align: center;
`;