import React from 'react';
import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Component/Home';
import History from './Component/History';
import Representation from './Component/Representation';
import Lessons from './Component/Lessons';

function App() {
  return (
    <div className="App">
        <video className='backgroundVideo' src="./img/drums.mp4"  type="video/mp4" autoPlay loop  muted/>
      <BrowserRouter>
        <Header></Header>
        <div className='container'>
          <Route exact path="/" component={Home}/>
          <Route  path="/bio" component={History}/>
          <Route  path="/lessons" component={Lessons}/>
          <Route  path="/gallery" component={Home}/>
          <Route  path="/representation" component={Representation}/>
          <Route  path="/schedule" component={Home}/>
        </div>
      </BrowserRouter>
    </div>
  );
}


export default App;
