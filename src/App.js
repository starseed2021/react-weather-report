import React from 'react';
import Temperature from './components/Temperature'
import './App.css';

const App = () => {
  return ( 
    <div>
      <header className='temp-header'>
        <h1 className='temp-style'> Temperature </h1>
      </header>
      <main>
        < Temperature
        />
      </main>
    </div>
  )
};

export default App;
