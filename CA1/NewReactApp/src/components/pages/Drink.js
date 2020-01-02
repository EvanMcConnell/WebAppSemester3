import React from 'react';
import DrinkPic from '../images/drink.jpg';

function Drink() {
    return (
        <React.Fragment>
            <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '60%', marginLeft: '20%', marginTop: '3%', textAlign: 'center'}}>
            <h1>Drink</h1>
            <p>Slurp Slurp</p>
            <img src={DrinkPic} style={{width: '100%'}}/>
            </div>
        </React.Fragment>
    )
}


export default Drink;