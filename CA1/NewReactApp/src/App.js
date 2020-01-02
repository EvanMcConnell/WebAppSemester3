import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ItemList from './components/itemList';
import Form from './components/itemForm';
import api from './datastore/stubAPI';
import _ from 'lodash';
import Fruit from './components/pages/Fruit';
import Carb from './components/pages/Carb';
import Dairy from './components/pages/Dairy';
import Meat from './components/pages/Meat';
import Snack from './components/pages/Snack';
import Veg from './components/pages/Veg';
import Drink from './components/pages/Drink';
import bi from './components/images/background.jpg';

export default class App extends Component {  
  addItem= (title, author, link) => {
    api.add(title, author, link);
    this.setState({});
  };
  
  incrementQuantity= (id) => {
    api.increaseQuantity(id) ;
    this.setState({});
};

decrementQuantity= (id) => {
    api.decreaseQuantity(id) ;
    this.setState({});
};

    render() {
      let items = _.sortBy(api.getAll(), item => -item.upvotes);
        return (
            <Router>
                <body style={{backgroundImage: `url(${bi})`}}>
                <Route path="/" render={props => (
                    <React.Fragment>
            <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-3">
                    <h1>
                    <Link to="/" style={{backgroundColor: 'bisque', margin: '5%', borderRadius: '20px', color: 'brown', padding: '1%'}}>
                        Shopping List
                    </Link>
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 ">
                <Form handleAdd={this.addItem} />
                </div>
                <div className="col-md-8">
                <ItemList items={items} 
            increaseQuantityHandler={this.incrementQuantity}
            decreaseQuantityHandler={this.decrementQuantity} />
                </div>
            </div>  
        </div>  
        </React.Fragment>
                )}/>
        <Route path="/fruit" component={Fruit} />
        <Route path="/carb" component={Carb} />
        <Route path="/dairy" component={Dairy} />
        <Route path="/meat" component={Meat} />
        <Route path="/snacks" component={Snack} />
        <Route path="/Veg" component={Veg} />
        <Route path="/Drink" component={Drink} />
        </body>
        </Router>);
    }
}