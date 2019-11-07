import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Items from './components/Items';
import AddItem from './components/AddItem';
import About from './components/pages/About';
//import uuid from 'uuid';

import './App.css';

class App extends Component {


state = {
  items: [
    {
      id: 1,
      title: 'Take out the wife',
      bought: false
    },
    {
      id: 2,
      title: 'Kill the wife',
      bought: false
    },
    {
      id: 3,
      title: 'Meeting with boss',
      bought: false
    },
    {
      id: 4,
      title: 'Meeting with boss',
      bought: false
    }
  ]
}

// Toggle Bought
bought = (id) => {
  this.setState( {items: this.state.items.map(item => {
    if(item.id === id){
      item.bought = !item.bought
    }
    return item;
  }) });
}


//Delete Item
delItem = (id) => {
  this.setState({ items: [...this.state.items.filter(item => item.id !== id)] })
}

nextId = 5

//Add Item
addItem = (title) => {
  const newItem = {
    id: this.nextId,
    title,
    bought: false
  }
  this.setState({ items: [...this.state.items, newItem] });
}


  render(){
  return (
    <Router>
    <div className="App">
      <div className="container">
      <Header />
      <Route path="/" render={props => (
        <React.Fragment>
          <AddItem addItem={this.addItem} />
          <Items items={this.state.items} bought={this.bought} delItem={this.delItem}/>
        </React.Fragment>
      )} />
      <Route path="/about" component={About} />
      </div>
    </div>
    </Router>
  );
  }
}

export default App;
