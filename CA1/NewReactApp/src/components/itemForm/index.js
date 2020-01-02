import React, { Component } from 'react';
import './itemForm.css';

export default class ItemForm extends Component {
    state = { title: '', type: '', quantity: ''};

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd( this.state.title, this.state.type, this.state.quantity)
        this.setState({ title: '',type: '', quantity: ''})
    }
    handleTitleChange = (e) =>  this.setState({title: e.target.value});
    handleQuantityChange = (e) => this.setState({quantity: e.target.value});
    handleTypeChange = (e) => this.setState({type: e.target.value});

    render() {
        return (
         <form style={{backgroundColor: 'bisque', padding: '2%'}}>
             <h3>Add an item</h3>
             <div className="form-group">
                 <input type="text"
                     className="form-control"
                     placeholder="Title"
                     value={this.state.title}
                     onChange={ this.handleTitleChange } />
             </div>
             <div>
                 <select className="form-group" value={this.state.type} onChange={this.handleTypeChange}>
                    <option value="">Type</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Veg">Veg</option>
                    <option value="Meat">Meat</option>
                    <option value="Snack">Snack</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Carb">Carb</option>
                    <option value="Drink">Drink</option>
                </select>
             </div>
             <div className="form-group">
                 <input type="text"
                 className="form-control"
                 placeholder="Quantity"
                 value={this.state.quantity}
                 onChange={ this.handleQuantityChange } />
             </div>
            <button type="submit" className="btn btn-primary"
                onClick={this.handleSubmit}>Add</button>
         </form>
         );
     }
}