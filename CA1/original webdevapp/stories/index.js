import React from 'react';
import { storiesOf } from '@storybook/react';
import App from '../src/App';
import AddItem from '../src/components/AddItem';
import DropdownItem from '../src/components/DropdownItem';
import Item from '../src/components/Item';
import Items from '../src/components/Items';


storiesOf("webapp assignment 1/Complete App, module")
    .add("Complete App", () => <App />);


storiesOf("webapp assignment 1/Add Item", module)
    .add("Dropdown Menu", () => <DropdownItem />)
    .add("Complete Item Form", () => <AddItem />);


const sampleItem = { id: 1, title: 'Apple', type: 'Fruit', bought: false }

const sampleState = {
    items: [
      {
        id: 1,
        title: 'Apples',
        type: 'Fruit',
        bought: false
      },
      {
        id: 2,
        title: 'Fish',
        type: 'meat',
        bought: false
      },
      {
        id: 3,
        title: 'Carrots',
        type: 'Vegetables',
        bought: false
      },
      {
        id: 4,
        title: 'Ice-Cream',
        type: 'Snacks',
        bought: false
      }
    ]
  }


storiesOf("webapp assignment 1/Item", module)
    .add("Item", () => <Item item={sampleItem}/>)
    .add("Items", () => <Items items={sampleState}/>);