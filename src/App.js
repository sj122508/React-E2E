import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'; 
import { SearchBox } from './components/search-box/search-box.component';

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField : ''
    };
  }

  componentDidMount() {
    console.log('mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  } 

handleChange = (e) => {
  this.setState({searchField:e.target.value})
}

  render() {
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()
      ))

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>

        <h1>{this.state.searchField}</h1>
            
        <SearchBox 
        placeholder='Search Monsters'
        handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}

export default App
