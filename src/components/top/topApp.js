import React from 'react';
import styled from 'styled-components';
import { useContext } from "react";
import UserContext from '../UserContext';

export default function TopApp(){

    const {userInfo} = useContext(UserContext)
    return(
        <>
        <TopAppDiv>
          <p>Trackit</p>
          <img src={userInfo.image} alt='userImage' />
        </TopAppDiv>
        </>
    )
}

const TopAppDiv= styled.div`
width: 100%;
height: 70px;
margin: 0 auto;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
    align-items:center;
    justify-content:space-between;
    p{
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 69px;
    color: #FFFFFF;
    font-family: 'Playball', cursive;
    margin-left: 18px
    }
    img{
        width:52px;
        height:52px;
        border-radius: 50%;
        margin-right:10px;
    }
`;