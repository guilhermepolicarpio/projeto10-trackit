import styled from 'styled-components';
import { useState } from "react";
import TopLogin from "./top/topLogin"
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from '../services/trackit';

export default function Login(){
    const [values, setValues] = useState({ email: '', password: '' });
    let navigate = useNavigate();

    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        }

   const SendLogin = (e) =>{   

    console.log(values)
    loginUser(values).then(
        answer=>console.log(answer),
        navigate("../hoje"),
        alert("Usuario criado com sucesso")
    )
  }

    return(
        <>
            <TopLogin/>
            <Campo type="email" onChange={Change} placeholder=" email" name='email' value={values.email}/>
            <Campo type="password" onChange={Change} placeholder=" senha" name='password' value={values.password}/>
            <ButtonBox onClick={SendLogin}>
                <p>Entrar</p>
            </ButtonBox>
            <Link to="/sing_up">Não tem uma conta? Cadastre-se!</Link>
        </>
    );
}


const Campo= styled.input`
width:375px;
height:45px;
color: #DBDBDB;
font-size: 19.976px;
line-height: 25px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 6px;
`;

const ButtonBox= styled.div`
display: flex;
align-items:center;
justify-content: center;
width:375px;
height:45px;
font-size: 19.976px;
line-height: 25px;
border: 1px solid #D5D5D5;
background: #52B6FF;
border-radius: 4.63636px;
cursor:pointer;

p{
    text-align:center;
    color:white;
}
`;