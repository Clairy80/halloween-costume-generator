import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Slider from './components/Slider'

function App() {
 return (
  <div className='App'>
    <header className='App-header'
    ><h1>Halloween Costume Generator</h1></header>
    <Slider/>
  </div>
 );
}

export default App;
