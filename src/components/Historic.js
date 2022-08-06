import TopApp from './top/topApp'; 
import Footer from './Footer'
import styled from 'styled-components';

export default function Historic(){
    return(
        <>
        <TopApp/>
        <HistoricBox>
            <p>Meus hábitos</p>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </HistoricBox>
         <Footer/>
        </>
    )
}

const HistoricBox = styled.div`

    margin-top: 30px;
    margin-bottom: 100px;
    padding: 0 20px;
    background-color: #f2f2f2;
    p:first-child{

        font-size: 22px;
        line-height: 29px;
        color: #126BA5;
        margin-bottom: 17px;;
    }
    p:last-child{

        font-size: 18px;
        line-height: 22px;
        color: #666666;
    }
`;