
import styled from 'styled-components';
import TopApp from './top/topApp'; 
import Footer from './Footer'
import 'dayjs/locale/pt-br';
import dayjs from 'dayjs';

export default function Today(){

    const days = dayjs().locale('pt-br').format('dddd, DD/MM');
    const now = days[0].toUpperCase() + days.substring([1]);

    return(
        <>
        <TopApp/>
        <StatusToday>
            <h2>{now}</h2>
        </StatusToday>
        <Footer/>
        </>
    )
}

const StatusToday= styled.div`

h2{
    padding: 20px 18px;
    color: #126BA5;
    font-size: 22.976px;
    line-height: 29px;
}

`;