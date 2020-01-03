import React, { Component, Fragment } from 'react';
import FoodItem from '../foodItem';

export default class ItemList extends Component {
    render() {
        let items = this.props.items.map(
            (item,index) => 
                <FoodItem key={index} 
                    item={item} 
                    increaseQuantityHandler={this.props.increaseQuantityHandler}
                    decreaseQuantityHandler={this.props.decreaseQuantityHandler} /> 
            );
      return <Fragment>{items}</Fragment>;
    }
  }