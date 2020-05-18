import React, {useState} from "react";
import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  const credentials = {
    username: '',
    password: ''
  }
  const [login, setLogin] = useState(credentials)

  const handleChange = e => {
    e.persist();
    setLogin({
      ...login,
      [e.target.name]: e.target.value
    })
  }
  const submitForm = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/login', login)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/protected');
      console.log('hello', res)
    })
    .catch(err => console.log(err))
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <h2>Please Login</h2>
      <>
      <form onSubmit={submitForm}>
        <input name='username' placeholder='username' value={login.username} onChange={handleChange}/>
        <input name='password' placeholder='password' value={login.password} onChange={handleChange}/>
        <button>Login</button>
      </form>
      </>
    </>
  );
};

export default Login;
