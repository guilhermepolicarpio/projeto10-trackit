import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import styled from 'styled-components';
import Login from "./components/login";
import GlobalStyle from "./styles/globalStyles";
import Registration from "./components/Registration";
import Today from "./components/Today";
import Historic from "./components/Historic"
import Habits from "./components/Habits";

const rootHtml= document.querySelector(".root")

export default function Initial(){

    return(
     <>
        <GlobalStyle />
        <BodyContent>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sing_up" element={<Registration />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<Historic />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </BrowserRouter>
        </BodyContent>
    </>
    )

}
const BodyContent= styled.div`

width: 375px;
margin: 0 auto;
`;

ReactDOM.render(
    <React.StrictMode>
        <Initial />
    </React.StrictMode>, rootHtml);