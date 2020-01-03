import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ItemList from './components/itemList';
import Form from './components/itemForm';
import * as api from './api';
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
    state = {items: [{}]};

    componentDidMount() {
        api.getAll().then(resp => {
            this.setState({
                items: resp.items
            });
        }).catch(console.error);
    };


    addNewsItem = (title, type, quantity) => {
        api.add(title, type, quantity)
        .then(resp => {
                      const newItem = {"id":resp.id,"title":title,"type":type,"quantity":quantity};
                      this.setState({items: this.state.items.concat([newItem])});
        })
      };
  
  
    incrementQuantity = (id) => {
        api.increaseQuantity(id).then(resp=> {
               var increasedQuantityItem = _.find(this.state.items, item=>item.id == id);
                increasedQuantityItem.quantity++;  
               this.setState({})
             }) ;
      };

      decrementQuantity = (id) => {
        api.decreaseQuantity(id).then(resp=> {
               var decreasedQuantityItem = _.find(this.state.items, item=>item.id == id);
                decreasedQuantityItem.quantity--;  
               this.setState({})
             }) ;
      };



    render() {
        const items = _.sortBy(this.state.items, item =>
            item.quantity);
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