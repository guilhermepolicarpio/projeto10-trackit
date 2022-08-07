import React from 'react';
import styled from 'styled-components';
import Image from "../../images/toplogin.png"

export default function TopLogin(){
    return(
        <Top>
            <TopLoginImg src={Image} alt=""/>
        </Top>
    )
}

const Top= styled.div`
display: flex;
padding-top: 70px;
margin-bottom: 30px;
`;

const TopLoginImg= styled.img`
margin: 0 auto;
width: 180px;
height: 178.38px;
`;