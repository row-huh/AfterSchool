// src/App.js

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/shared-components/NavbarComponent';
import Hero from './components/Hero';
import { Question } from './components/Question';


function App() {
  return (
    <div>
      <NavbarComponent/>  
      <Hero/>
      <Question/>
    </div>
  );
}

export default App;
