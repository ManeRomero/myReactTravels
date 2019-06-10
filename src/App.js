import React from 'react';
import Travels from './components/Travels.jsx'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Detail from './components/Detail'

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Travels} exact/>
          <Route path="/users/:i" component={Detail}/>
        </Switch>
      </BrowserRouter>      
  )
}

export default App;
