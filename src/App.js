import React from 'react';
import './App.css';
import Directory from '../components/Directory/index';
import Header from '../components/Directory/index';
import SearchBar from '../components/Directory/index';

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Directory />
    </div>
  );
}

export default App;
