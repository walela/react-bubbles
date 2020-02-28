import React from 'react'
import { Switch, Route } from 'react-router-dom'

import ProtectedRoute from './helpers/ProtectedRoute'
import Login from './components/Login'
import Bubbles from './components/BubblePage'
import './styles.css'

function App() {
  return (
    <React.Fragment>
      {/* <div className='App'></div> */}
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <ProtectedRoute path='/bubbles'>
          <Bubbles />
        </ProtectedRoute>
      </Switch>
    </React.Fragment>
  )
}

export default App
