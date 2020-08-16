import React from 'react';
import Header from './components/Header/index';
import Directory from './components/Directory/index';
import SearchBar from './components/SearchBar/index';
import Api from './utils/api';

class App extends React.Component {

  state = {
    employees: [],
  };

  componentDidMount() {
    Api.getRanEmployee()
      .then(res => {
        this.setState({ employees: res.data.resullts });
        }).catch(err => {console.log(err) 
      });
  }


render() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <Directory employees={this.state.employees}/>
    </div>
  );
}
}

export default App;
