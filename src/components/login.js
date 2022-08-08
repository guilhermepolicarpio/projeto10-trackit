import styled from 'styled-components';
import TopLogin from "./top/topLogin"
import { Link,useNavigate } from "react-router-dom";
import { loginUser } from '../services/trackit';
import { ThreeDots } from  'react-loader-spinner';
import { useContext, useState, useEffect } from "react";
import UserContext from './UserContext';

export default function Login(){
    const [values, setValues] = useState({ email: '', password: '' });
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    let navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('userInfo') !== null) {
            setUserInfo(JSON.parse(localStorage.getItem('userInfo')));
           
        };
    }, [navigate,setUserInfo])

    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    }

    const SendLogin = (e) =>{ 
    e.preventDefault();
    setLoading(true) 
    setDisable(true)
     
    loginUser(values).then((res) => {
    setUserInfo(res.data);
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    navigate("../hoje")
    })

    loginUser(values).catch((res) => {
 
    alert(res.response.data.message)

    })
  }

    return(
        <LoginField>
            <TopLogin/>
            <Box>
            <Forms onSubmit={(e) => SendLogin(e)}>
            {loading ? 
                <><Campodis type="email" onChange={Change} placeholder=" email" name='email' value={values.email} required  disabled= {disable}/>
                <Campodis type="password" onChange={Change} placeholder=" senha" name='password' value={values.password} required  disabled= {disable}/>
                <button type="submit">
                {loading ? <ThreeDots color="white" height={40} width={40} /> : <p>Entrar</p>}
                </button>
                </>:
                <><Campo type="email" onChange={Change} placeholder=" email" name='email' value={values.email} required  disabled= {disable}/>
                <Campo type="password" onChange={Change} placeholder=" senha" name='password' value={values.password} required  disabled= {disable}/>
                <button type="submit">
                {loading ? <ThreeDots color="white" height={40} width={40} /> : <p>Entrar</p>}
                </button>
                </>}
            </Forms>
            </Box>
            <Link to="/sing_up"><h3>Não tem uma conta? Cadastre-se!</h3></Link>
        </LoginField>
    );
}


const Campo= styled.input`
width:350px;
height:45px;
color: #DBDBDB;
font-size: 19.976px;
line-height: 25px;
background: #FFFFFF;
display: flex;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 8px;
`;

const Campodis= styled.input`
width:350px;
height:45px;
color: #DBDBDB;
font-size: 19.976px;
line-height: 25px;
display: flex;
background: #F2F2F2;
border: 1px solid #D5D5D5;
border-radius: 5px;
margin-bottom: 8px;
`;


const Forms= styled.form`

button{
    display: flex;
    align-items:center;
    justify-content: center;
    width:350px;
    height:45px;
    font-size: 19.976px;
    line-height: 25px;
    border: 1px solid #D5D5D5;
    background: #52B6FF;
    border-radius: 4.63636px;
    cursor:pointer;

p{  text-align:center;
    color:white;
}}`;

const LoginField= styled.div`


h3{
    padding: 20px;
    text-align: center;
    text-decoration-line: underline;
    color: #52B6FF;
}

h3: hover {
	text-decoration: underline ;
	color:blue;
	}`;

const Box= styled.div`
display: flex;
justify-content: center;

`;