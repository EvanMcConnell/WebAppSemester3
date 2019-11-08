import React, { Component } from 'react'

var Dropdown = require('react-simple-dropdown');
var DropdownTrigger = Dropdown.DropdownTrigger;
var DropContent = Dropdown.DropdownContent;

export class DropdownItem extends Component {

    render(){
        return(
            <select>
                <option>Fruit</option>
                <option>Veg</option>
                <option>Meat</option>
                <option>Snack</option>
                <option>Dairy</option>
                <option>Carb</option>
            </select>
        )
    }
}

export default DropdownItem