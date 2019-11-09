import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Items from './components/Items';
import AddItem from './components/AddItem';
import About from './components/pages/About';
import Background from './background.jpg';
//import uuid from 'uuid';

import './App.css';


const headingStyle = {
  width: '50%',
  borderRadius: '50px',
  background: '#ffffff'
}


class App extends Component {


state = {
  items: [
    {
      id: 1,
      title: 'Apples',
      type: 'Fruit',
      bought: false
    },
    {
      id: 2,
      title: 'Fish',
      type: 'meat',
      bought: false
    },
    {
      id: 3,
      title: 'Carrots',
      type: 'Vegetables',
      bought: false
    },
    {
      id: 4,
      title: 'Ice-Cream',
      type: 'Snacks',
      bought: false
    }
  ]
}

// Toggle Bought
isBought = (id) => {
  this.setState( {items: this.state.items.map((item) => {
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
addItem = (title, type) => {
  const newItem = {
    id: this.nextId,
    title,
    type,
    bought: false
  }
  this.setState({ items: [...this.state.items, newItem] });
  this.nextId++
}



  render(){
  return (
        <Router>
          <div className="App">
            <div className="container">
            <Header />
            <body>
              <div style={{backgroundImage: `url($)`}}>
            <Route path="/" render={props => (
              <React.Fragment>
                <html  style={{margin: '0', height: '100%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                {/*Add Item Bar*/}
                <AddItem addItem={this.addItem} />

                {/*Menu Headings*/}
                <div style={{width: '60%', padding: '10px', margin: '0 auto'}}>
                <table style={{width: '100%', tableLayout: 'fixed'}}>
                  <tr>
                    <td style={{width: '25%'}}><span style={headingStyle}>/ Bought \</span></td>
                    <td style={{width: '25%'}}><span style={headingStyle}>/ Item Name \</span></td>
                    <td style={{width: '25%'}}><span style={headingStyle}>/ Item Type \</span></td>
                    <td style={{width: '25%',float: 'right'}}><p style={headingStyle, {textAlign: 'right'}}>Delete</p></td>
                  </tr>
                </table>
                </div>

                {/*List of Items*/}
                <div style={{height: '70%'}}>
                <Items items={this.state.items} isBought={this.isBought} delItem={this.delItem}/>
                </div>
                </html>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            </div>
            </body>
            </div>
          </div>
        </Router>
  );
  }
}

export default App;
