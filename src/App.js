import './App.css'
import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Boarding from './components/Boarding/Boarding';



class App extends Component {
  render () {
  return (
    <div className='main'>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Booking/>}/>
      <Route path="/boarding" exact element={<Boarding/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );

}
}

export default App;
