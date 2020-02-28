import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const LoginContainer = styled.div`
  width: 420px;
  height: 58vh;
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
  color: firebrick;
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
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const initialLoginForm = { username: '', password: '' }
  const [loginForm, setLoginForm] = useState(initialLoginForm)

  const handleChange = e => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value })
    console.log(loginForm)
  }

  const handleSubmit = e => {}

  return (
    <LoginContainer>
      <Heading>Login</Heading>
      <Input
        placeholder='Username'
        value={loginForm.value}
        name='username'
        onChange={handleChange}
      />
      <Input
        type='password'
        placeholder='Password'
        name='password'
        onChange={handleChange}
        value={loginForm.password}
      />
      <LoginButton>Sign In</LoginButton>
    </LoginContainer>
  )
}

export default Login
