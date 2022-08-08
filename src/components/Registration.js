
import styled from 'styled-components';
import { useState } from "react";
import TopLogin from "./top/topLogin"
import { Link, useNavigate} from "react-router-dom";
import { newUser } from '../services/trackit';
import { ThreeDots } from  'react-loader-spinner';

export default function Registration(){
    const [values, setValues] = useState({ email: '', name: '', image: '', password: '' });
    let navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    const [loading, setLoading] = useState(false);

    const Change = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
        }

   const SendForm = (e) =>{   
    e.preventDefault();
    setLoading(true) 
    setDisable(true)
    console.log(values)

    newUser(values).then((res) => {
        navigate("../")
        alert("Usuario criado com sucesso")
    }
    )

    newUser(values).catch((res) => {
      setDisable(false)
      alert(res.response.data.message)
      setLoading(false)
  })
  }

    return(
    <><LoginField>
      <TopLogin/>
      <Box>
      <Forms onSubmit={(e) => SendForm(e)}>
      {loading ? 
          <>
            <Campodis type="email" placeholder=" email" onChange={Change} name='email' value={values.email} required  disabled= {disable}/>
            <Campodis type="password" placeholder=" senha" onChange={Change} name='password' value={values.password} required  disabled= {disable}/>
            <Campodis type="text" placeholder=" nome" onChange={Change}  name='name' value={values.name} required  disabled= {disable}/>
            <Campodis type="text" placeholder=" foto" onChange={Change}  name='image' value={values.image} required  disabled= {disable} />
          </>:
            <><Campo type="email" placeholder=" email" onChange={Change} name='email' value={values.email} required  disabled= {disable}/>
            <Campo type="password" placeholder=" senha" onChange={Change} name='password' value={values.password} required  disabled= {disable}/>
            <Campo type="text" placeholder=" nome" onChange={Change}  name='name' value={values.name} required  disabled= {disable}/>
            <Campo type="text" placeholder=" foto" onChange={Change}  name='image' value={values.image} required  disabled= {disable} />
            <button type="submit">
                {loading ? <ThreeDots color="white" height={40} width={40} /> : <p>Cadastro</p>}
                </button>
            </>}
      </Forms>
      </Box>
      <Link to="/">
        <h3>Já tem uma conta? Faça login!</h3>
      </Link>
      </LoginField>
    </>
    )
}

const Campo= styled.input`
  width:350px;
  height:45px;
  color: #DBDBDB;
  font-size: 19.976px;
  line-height: 25px;
  background: #FFFFFF;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-bottom: 8px;
  display:flex;
`;

const Campodis= styled.input`
  width:350px;
  height:45px;
  color: #DBDBDB;
  font-size: 19.976px;
  line-height: 25px;
  background: #F2F2F2;
  border: 1px solid #D5D5D5;
  border-radius: 5px;
  margin-bottom: 8px;
  display:flex;
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

p{
    text-align:center;
    color: white;
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