import React, { useState, useEffect } from 'react'
import axios from '../helpers/axiosWithAuth'

import Bubbles from './Bubbles'
import ColorList from './ColorList'

const BubblePage = () => {
  const api = 'http://localhost:5000/api/colors'
  const [colorList, setColorList] = useState([])

  useEffect(() => {
    axios()
      .get(api)
      .then(res => setColorList(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div className='bubbles'>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </div>
  )
}

export default BubblePage
