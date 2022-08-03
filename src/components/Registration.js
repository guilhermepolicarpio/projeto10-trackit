
import styled from 'styled-components';
import { useState } from "react";
import TopLogin from "./top/topLogin"
import { Link, useNavigate} from "react-router-dom";
import { newUser } from '../services/trackit';

export default function Registration(){
    const [values, setValues] = useState({ email: '', name: '', image: '', password: '' });
    let navigate = useNavigate();

    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        }

   const SendForm = (e) =>{   

    console.log(values)
    newUser(values).then(
      answer=>console.log(answer),
        navigate("../"),
        alert("Usuario criado com sucesso"),
      
    )
  }

    return(
    <>
      <TopLogin/>
      <form>
      <Campo type="email" placeholder=" email" onChange={Change} name='email' value={values.email} />
      <Campo type="password" placeholder=" senha" onChange={Change} name='password' value={values.password}/>
      <Campo type="text" placeholder=" nome" onChange={Change}  name='name' value={values.name}/>
      <Campo type="text" placeholder=" foto" onChange={Change}  name='image' value={values.image} />

      <ButtonBox onClick={SendForm}>
           <p>
            Cadastro
           </p>
      </ButtonBox>
      </form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </>
    )
}


const Campo= styled.input`
width:80%;
height:45px;
color: #DBDBDB;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
font-family: 'Lexend Deca', sans-serif;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 6px;
`;

const ButtonBox= styled.div`
width:80%;
height:45px;
font-style: normal;
font-weight: 400;
font-size: 19.976px;
line-height: 25px;
font-family: 'Lexend Deca', sans-serif;
border: 1px solid #D5D5D5;
background: #52B6FF;
border-radius: 4.63636px;

p{
    text-align:center;
    color:white;
}
`;