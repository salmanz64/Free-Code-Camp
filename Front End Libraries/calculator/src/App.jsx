import { useState } from 'react';
import './App.css';
import Buttons from './components/buttons';
import Display from './components/display';

function App() {
  return(
    <>
    <div className='container'>
      <Display></Display>
      <Buttons></Buttons>
    </div>
    
    </>
  )
     
}

export default App;
