import React, { Component } from 'react'

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


    onSubmit = (e) => {
        
        console.log(this.state.value)
        if(this.state.title == ""){ alert("Please enter item name.")}
        else if(this.state.value == undefined || this.state.value == ""){ alert("Please select a item type.")}
        else{
        this.props.addItem(this.state.title, this.state.value);
        this.setState({ title: ''});
        }
        e.preventDefault();
    }


    onChangeText = (e) => { this.setState({ [e.target.name]: e.target.value }) }


    onChangeSelect = (e) => { this.setState({ value: e.target.value }) }

    
    render() {
        return (
            <form onSubmit={this.onSubmit}  style={{ display: 'flex', padding: '10px 100px'}}>
                <input 
                    type="text" 
                    name="title" 
                    style={{ flex: '10', padding: '5px' }} 
                    placeholder="add Item..." 
                    value={this.state.title} 
                    onChange={this.onChangeText}
                />

                <select onChange={this.onSelect} value={this.state.value} onChange={this.onChangeSelect}>
                    <option value="">Type</option>
                    <option value="Fruit">Fruit</option>
                    <option value="Veg">Veg</option>
                    <option value="Meat">Meat</option>
                    <option value="Snack">Snack</option>
                    <option value="Dairy">Dairy</option>
                    <option value="Carb">Carb</option>
                </select>

                <input 
                    type="submit" 
                    value="Submit" 
                    className="btn" 
                    style={{flex: '1'}} 
                />
            </form>
        )
    }
}

export default AddItem
