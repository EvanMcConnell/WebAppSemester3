import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header'
import Items from './components/Items';
import AddItem from './components/AddItem';
import About from './components/pages/About';
import Fruit from './components/pages/Fruit';
import Carb from './components/pages/Carb';
import Dairy from './components/pages/Dairy';
import Meat from './components/pages/Meat';
import Snack from './components/pages/Snack';
import Veg from './components/pages/Veg';
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
          <div style = {{position: 'absolute', top: '0', right: '0', left: '0', bottom: '0',backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%'}}>
          <div style = {{position: 'absolute', top: '0', right: '0', left: '0', bottom: '0',background: 'rgba(0, 0, 0, 0.4)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '100%'}}>
          <div className="App">
            <div className="container">
            <Header />
            <body>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <div style = {{float: 'left'}}>
                {/*Add Item Form*/}
                <AddItem addItem={this.addItem} />
                </div>

                <div style = {{width: '90%', float: 'right'}}>
                {/*Menu Headings*/}
                <div style={{width: '60%', padding: '10px', margin: '0 auto'}}>
                <table style={{width: '100%', tableLayout: 'fixed'}}>
                  <tr>
                    <td style={{width: '25%'}}><span style={headingStyle}>/ Bought \</span></td>
                    <td style={{width: '25%'}}><span style={headingStyle}>/ Item Name \</span></td>
                    <td style={{width: '25%'}}><span style={headingStyle}>/ Item Type \</span></td>
                    <td style={{width: '25%',float: 'right'}}><span style={{borderRadius: '50px', background: '#ffffff', textAlign: 'right'}}></span></td>
                  </tr>
                </table>
                </div>

                {/*List of Items*/}
                <div style={{height: '70%'}}>
                <Items items={this.state.items} isBought={this.isBought} delItem={this.delItem}/>
                </div>
                </div>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
            <Route path="/fruit" component={Fruit} />
            <Route path="/carb" component={Carb} />
            <Route path="/dairy" component={Dairy} />
            <Route path="/meat" component={Meat} />
            <Route path="/snacks" component={Snack} />
            <Route path="/vegetables" component={Veg} />
            </body>
            </div>
          </div>
          </div>
          </div>
        </Router>
  );
  }
}

export default App;
