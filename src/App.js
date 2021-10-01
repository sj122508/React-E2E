import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import { CardList } from './components/card-list/card-list.component'; 

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: []
    };
  }

  componentDidMount() {
    console.log('mount')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  } 

  render() {
    console.log('return')
    return (
      <div className="App">
        <CardList name='Hello'/>
        {
          this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    )
  }
}

export default App
