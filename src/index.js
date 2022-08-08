import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import React from "react";
import { useState } from "react";
import UserContext from "./components/UserContext"; 
import Login from "./components/login";
import GlobalStyle from "./styles/globalStyles";
import Registration from "./components/Registration";
import Today from "./components/Today";
import Historic from "./components/Historic"
import Habits from "./components/Habits";


const rootHtml= document.querySelector(".root")

export default function Initial(){
    const [userInfo, setUserInfo] = useState({});
    const [reload,SetReload] = useState(false);
    const [AddHabits, setAddHabits] = useState(false);
    const [progress, setProgress] = useState(0);
    const [Todaylist, setTodaylist] = useState([]);

    
    return(
     <>
        <GlobalStyle />
        <UserContext.Provider value={{ userInfo, setUserInfo, reload,SetReload,AddHabits,Todaylist, setTodaylist, setAddHabits,progress, setProgress}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="/sing_up" element={<Registration />} />
                    <Route path="/hoje" element={<Today />} />
                    <Route path="/historico" element={<Historic />} />
                    <Route path="/habitos" element={<Habits />} />
                </Routes>
            </BrowserRouter>
            </UserContext.Provider>
    </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <Initial />
    </React.StrictMode>, rootHtml);