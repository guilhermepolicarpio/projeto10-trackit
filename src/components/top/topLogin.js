import React from 'react';
import styled from 'styled-components';
import Image from "../../images/toplogin.png"

export default function TopLogin(){
    return(

        <Toplogin src={Image} alt=""/>
    )
}

const Toplogin= styled.img`
margin: 100px 80px 30px 100px;
width: 180px;
height: 178.38px;
`;