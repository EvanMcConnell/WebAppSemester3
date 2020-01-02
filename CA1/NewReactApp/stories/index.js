import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from "@storybook/addon-actions";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import ItemForm from '../src/components/itemForm/';
import FoodItem from '../src/components/foodItem';
import ItemList from '../src/components/itemList';

storiesOf("Hacker App/Item Form", module).add("default", () => <ItemForm />);

const item = {
    id: 1 ,
    title : 'Item 1.',
    link : 'http://www.foo.bar',
    author : 'Joe Bloggs',
    comments : [],
    upvotes: 10
};

storiesOf('Hacker App/Food Item', module)
    .add('default', () => <FoodItem item= { item }  />
    )
    .add('No hyperlink', () => <FoodItem item= { { ...item, link: ''} }  />
    );

    storiesOf("Hacker App/Food Item", module)
    .add("default", () => <FoodItem item={item} upvoteHandler={action("upvoted")} /> )
    .add("No hyperlink", () => <FoodItem item={{ ...item, link: "" }} upvoteHandler={action("upvoted")}/>);

storiesOf('Hacker App/Item List', module)
    .add('default', () => { 
        const defaultItems = [
            { ...item, id: 1, title: 'Item 1', upvotes: 10 },
            { ...item, id: 2, title: 'Item 2', upvotes: 20 },
            { ...item, id: 3, title: 'Item 3', upvotes: 30 },
            { ...item, id: 4, title: 'Item 4', upvotes: 40 }
        ];
    return <ItemList items= { defaultItems }  />
});