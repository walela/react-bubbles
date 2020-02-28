import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from '../helpers/axiosWithAuth'
import { useHistory } from 'react-router-dom'

import Bubbles from './Bubbles'
import ColorList from './ColorList'

const LogoutButton = styled.button`
  width: 180px;
  padding: 18px 20px 17px 20px;
  font-family: 'Tenor Sans';
  font-weight: bold;
  font-size: 1.2rem;
  margin-left: 55vw;
  outline: none;
`

const BubblePage = () => {
  const history = useHistory()
  const api = 'http://localhost:5000/api/colors'
  const [colorList, setColorList] = useState([])

  useEffect(() => {
    axios()
      .get(api)
      .then(res => setColorList(res.data))
      .catch(err => console.error(err))
  }, [])

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/')
  }

  return (
    <>
      <div className='bubbles'>
        <ColorList colors={colorList} updateColors={setColorList} />
        <Bubbles colors={colorList} />
      </div>
      <LogoutButton className='logout' onClick={logout}>
        Logout
      </LogoutButton>
    </>
  )
}

export default BubblePage
