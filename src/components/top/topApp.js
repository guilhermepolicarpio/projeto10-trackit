import React from 'react';
import styled from 'styled-components';

export default function TopApp(){
    return(
        <>
        <TopAppDiv>
          <p>Trackit</p>
        </TopAppDiv>
        </>
    )
}

const TopAppDiv= styled.div`
width: 375px;
height: 70px;
margin: 0 auto;
background: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    p{
    font-style: normal;
    font-weight: 400;
    font-size: 38.982px;
    line-height: 69px;
    color: #FFFFFF;
    font-family: 'Playball', cursive;
    margin-left: 18px
    }
`;