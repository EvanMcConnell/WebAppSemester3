import React, {Component} from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

class Items extends Component {
bought = () => {}
  render(){
      return this.props.items
      .map((item) => (
        <Item key={item.id} item={item} isBought={this.props.isBought} delete={this.props.delete} />
      ));
  }
}

// PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired,
  isBought: PropTypes.func.isRequired,
  //delItem: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired
}

export default Items;
