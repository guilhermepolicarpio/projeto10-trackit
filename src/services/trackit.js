import axios from 'axios';

function newUser(values) {
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up`, values);
    return promise;
  }
  
  function loginUser(values) {
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login`, values);
    return promise;
  }

  function getHabit(config){
    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits`, config);
    return promise;
  }

  function getTodayHabit(config){
    const promise = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today`, config);
    return promise;
  }

  function doneHabit(habit,config){
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}/check`, habit,config);
    return promise;
  }

  function undoneHabit(habit,config){
    const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit}/uncheck`, habit,config);
    return promise;
  }
  export {newUser,loginUser,getHabit,getTodayHabit,doneHabit,undoneHabit};