import React from 'react';
import './App.css';
import { Cardlist } from './components/cardlist/cardlist.component';
import { SearchBox } from './components/searchBox/searchBox.components';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      robots: [],
      searchField: ''
  };
}

componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json()) 
    .then(users => this.setState({robots: users}));
}
  
  render() {

    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()));
    
    return(
      <div className="App">
      <h1 >
        Robots Rolodex
      </h1>
      <SearchBox 
      placeholder={"Search for Robots"} handlechange={searchValue => this.setState({ searchField: searchValue.target.value})}>

      </SearchBox>
      
      <Cardlist robots={filteredRobots}> {
       this.state.robots.map(robot => <h1 key={robot.id}>{robot.name}</h1>)}
       </Cardlist>
      
    </div>
  );
    }
  }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
