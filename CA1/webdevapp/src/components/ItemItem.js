import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.item.bought ? 'line-through' : 'none'
        }
    }



    render() {
        const { id, title } = this.props.item;

        return (
            <div style={this.getStyle()}>
                <p>
                    {<input type="checkbox" onChange={this.props.bought}/>} {' '}
                    {title}
                    <button onClick={this.props.delItem.bind(this, id)} style={btnStyle}>x</button>
                </p>
            </div>
        )
    }
}


// PropTypes
ItemItem.propTypes = {
    items: PropTypes.object
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
