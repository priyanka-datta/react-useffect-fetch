import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Students from './component/Students';
import Home from './component/Home';
import img from './images/img.jpg';

const App = () => {


  return (
    <BrowserRouter>
    <div className='container'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
      <a class="navbar-brand" href="/">Student Result Application</a>
        <a class="nav-item nav-link active" href="/home">Home </a>
        <a class="nav-item nav-link" href="/students">Students List</a>        
      </div>
  </div>
</nav>
    
    <Routes>
      <Route path='/students' Component={Students}></Route>
      <Route path='/home' Component={Home}></Route>
      <Route path='/sorted' element={<div>Sorted</div>}></Route>
    </Routes>
    </div>
    <div style={{height:"700px",backgroundColor:'cadetblue'}}>
    <div  style={{backgroundColor:'cadetblue',
     color:'yellow',
      
      textAlign:'center',
      fontWeight:'bold',
      fontSize:'40px'
      } }>
      Student Result Application</div>
      
      </div>
    </BrowserRouter>
    
  );
}

export default App;