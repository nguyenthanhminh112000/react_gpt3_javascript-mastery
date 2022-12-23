import React from 'react';
import './App.css';
import { Header } from './container';
import { Navbar } from './components';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
    </div>
  );
};

export default App;
