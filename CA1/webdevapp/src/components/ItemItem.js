import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            width: '60%',
            borderBottom: '1px #ccc dotted',
            margin: '0 auto'
        }
    }


    foodStyle = () => {
        return {
        display: 'inline',
        background: '#ffffff',
        padding: '5px 10px',
        border: 'none',

        textDecoration: this.props.item.bought ? 'line-through' : 'none'
        }
    }


    render() {
        const { id, title, type } = this.props.item;

        return (
            <div style={this.getStyle()}>
                <table style={{width: "100%"}}>
                    <tr>
                    <td style={{width: '25%'}}>
                    {<input style={checkStyle} type="checkbox" onChange={this.props.isBought.bind(this, id)}/>} {' '}
                    </td>
                    <td style={{width: '25%'}}>
                    <span style = {spanStyle}><p style = {this.foodStyle()}>{title}</p></span>
                    </td>
                    <td style={{width: '25%'}}>
                    <span style = {spanStyle}><p style = {infoStyle}>{type}</p></span>
                    </td>
                    <td style={{width: '25%'}}>
                    <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>x</button>
                    </td>
                    </tr>
                </table>
            </div>
        )
    }
}


// PropTypes
ItemItem.propTypes = {
    items: PropTypes.object
}

const spanStyle = {
    width: '25%',
    padding: '5px 10px',
    textAlignment: 'right'
}

const checkStyle = {
    float: 'left'
}

const infoStyle = {
    display: 'inline',
    background: '#ffffff',
    padding: '5px 10px',
    textAlignment: 'right'
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default ItemItem
