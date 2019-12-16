import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import api from '../datastore/stubAPI';
import app from '../App';

export class AddItem extends Component {
    state = {
        title: ''
    }

    currentType = 'test'
    onSelect = (e) => {
        this.currentType = "new test";
        e.preventDefault();
        this.currentType = this.state.value;
    }


    /*onSubmit = (e) => {
        
        console.log(this.state.value)
        if(this.state.title == ""){ alert("Please enter item name.")}
        else if(this.state.value == undefined || this.state.value == ""){ alert("Please select a item type.")}
        else{
        
        if(this.props){ this.props.addItem(this.state.title, this.state.value); }
        else{ alert("This is Storybook test item name:" + this.state.title + ", of type: " + this.state.value); }
        this.setState({ title: ''});
        }
        e.preventDefault();
    }*/

    onSubmit = (e) => {
        let theseItems = app.items;
        console.log(theseItems);
        //console.log(this.state.value)
        if(this.state.title == ""){ alert("Please enter item name.")}
        else if(this.state.value == undefined || this.state.value == ""){ alert("Please select a item type.")}
        else{
        /*if(this.props){ this.props.addItem(this.state.title, this.state.value); }
        else{ alert("This is Storybook test item name:" + this.state.title + ", of type: " + this.state.value); }
        this.setState({ title: ''});*/
            console.log(this.state.title);
            api.add(this.state.title, this.state.value, false);
        }
        e.preventDefault();
    }


    onChangeText = (e) => { this.setState({ [e.target.name]: e.target.value }) }


    onChangeSelect = (e) => { this.setState({ value: e.target.value }) }

    
    render() {
        return (

            <form onSubmit={this.onSubmit}  style={{textAlign: 'center', display: 'flex', padding: '10px 100px'}}>
                <table style={{position: 'absolute'}}>
                    <tr>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px' }} 
                    placeholder="add Item..." 
                    value={this.state.title} 
                    onChange={this.onChangeText}
                />
                </tr>

                <tr>
                <select onChange={this.onSelect} value={this.state.value} onChange={this.onChangeSelect}>
                    <option value="">Type</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Veg">Veg</option>
                    <option value="Meat">Meat</option>
                    <option value="Snack">Snack</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Carb">Carb</option>
                </select>
                </tr>

                <tr>
                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} 
                />
                </tr>
                </table>
            </form>
        )
    }
}

export default AddItem
