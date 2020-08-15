import React from 'react';
import Header from './components/Header/index';
import Directory from './components/Directory/index';
import SearchBar from './components/SearchBar/index';

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
