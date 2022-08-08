import TopApp from './top/topApp'; 
import Footer from './Footer'
import styled from 'styled-components';

export default function Historic(){

    
    return(
        <Box>
        <TopApp/>
        <HistoricBox>
            <p>Meus hábitos</p>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoricBox>
         <Footer/>
        </Box>
    )
}

const HistoricBox = styled.div`

    margin-top: 20px;
    padding: 0px 17px 0px 17px;
  
    p:first-child{

        font-size: 22.976px;
        line-height: 29px;
        color: #126BA5;
    }
    p:last-child{
        margin-top: 10px;
        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;

const Box = styled.div`
background: #E5E5E5;
position: absolute;
height: 100%;
width:100%;
`;