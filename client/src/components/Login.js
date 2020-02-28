import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const LoginContainer = styled.div`
  width: 420px;
  height: 380px;
  border-radius: 4px;
  box-shadow: -6px 8px 10px grey;
  background-color: lightskyblue;
  margin-top: 12vh;
  margin-left: 30vw;
  padding: 12px 24px;
`

const Heading = styled.h1`
  text-align: center;
  font-family: 'Marmelad';
  text-decoration: underline;
`

const Input = styled.input`
  width: 256px;
  padding: 18px;
  border-radius: 4px;
  border: 2px solid grey;
  margin-top: 12px;
  margin-left: 56px;
  font-family: 'Kosugi Maru';
  font-size: 1.2rem;
  outline: none;
`

const LoginButton = styled.button`
  width: 297px;
  padding: 18px;
  font-family: 'Kosugi Maru';
  font-weight: bold;
  font-size: 1.2rem;
  margin-top: 12px;
  margin-left: 56px;
`

const Login = () => {
  const api = 'http://localhost:5000/api/login'
  const history = useHistory()
  const initialLoginForm = { username: '', password: '' }

  const [loginForm, setLoginForm] = useState(initialLoginForm)

  const handleChange = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    console.log(loginForm)
  }

  const handleSubmit = e => {
    axios
      .post(api, { username: loginForm.username, password: loginForm.password })
      .then(res => {
        localStorage.setItem('token', res.data.payload)
        history.push('/bubbles')
      })
      .catch(err => console.error(err))
      .finally(setLoginForm(initialLoginForm))
  }

  return (
    <LoginContainer>
      <Heading>Login</Heading>
      <Input
        name='username'
        value={loginForm.username}
        onChange={handleChange}
        placeholder='Username'
      />
      <Input
        type='password'
        name='password'
        value={loginForm.password}
        onChange={handleChange}
        placeholder='Password'
      />
      <LoginButton onClick={handleSubmit}>Sign In</LoginButton>
    </LoginContainer>
  )
}

export default Login
