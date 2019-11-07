import React, {Component} from 'react';
import ItemItem from './ItemItem';
import PropTypes from 'prop-types';

class Items extends Component {
bought = () => {}

  render(){
      return this.props.items.map((item) => (
        <ItemItem key={item.id} item={item} bought={this.props.bought} delItem={this.props.delItem} />
      ));
  }
}

// PropTypes
Items.propTypes = {
  items: PropTypes.array.isRequired
}

export default Items;
