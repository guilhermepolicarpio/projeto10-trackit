import axios from 'axios';

function newUser(values) {
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, values);
    return promise;
  }
  
  function loginUser(values) {
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, values);
    return promise;
  }
  export {newUser,loginUser};