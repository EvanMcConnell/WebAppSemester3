import React from 'react';
import FruitPic from '../images/fruit.jpg';

function Fruit() {
    return (
        <React.Fragment>
            <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '60%', marginLeft: '20%', marginTop: '3%', textAlign: 'center'}}>
            <h1>Fruit</h1>
            <p>Fruits are the means by which angiosperms disseminate seeds. Edible fruits, in particular, have propagated with the movements of humans and animals in a symbiotic relationship as a means for seed dispersal and nutrition; in fact, humans and many animals have become dependent on fruits as a source of food. Accordingly, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.

In common language usage, "fruit" normally means the fleshy seed-associated structures of a plant that are sweet or sour, and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries. On the other hand, in botanical usage, "fruit" includes many structures that are not commonly called "fruits", such as bean pods, corn kernels, tomatoes, and wheat grains. The section of a fungus that produces spores is also called a fruiting body.</p>
            <img src={FruitPic} style={{width: '100%'}}/>
            </div>
        </React.Fragment>
    )
}


export default Fruit;