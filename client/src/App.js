import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import './styles.css'

function App() {
  return (
    <React.Fragment>
      <div className='App'></div>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
      </Switch>
    </React.Fragment>
  )
}

export default App
