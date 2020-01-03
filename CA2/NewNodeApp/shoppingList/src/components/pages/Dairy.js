import React from 'react';
import DairyPic from '../images/dairy.jpg';

function Dairy() {
    return (
        <React.Fragment>
            <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '60%', marginLeft: '20%', marginTop: '3%', textAlign: 'center'}}>
            <h1>Dairy</h1>
            <p>Dairy products or milk products are a type of food produced from or containing the milk of mammals. They are primarily produced from mammals such as cattle, water buffaloes, goats, sheep, camels and humans. Dairy products include food items such as yogurt, cheese and butter. A facility that produces dairy products is known as a dairy, or dairy factory. Dairy products are consumed worldwide, with the exception of most of East and Southeast Asia and parts of central Africa.</p>
            <img src={DairyPic} style={{width: '100%'}}/>
            </div>
        </React.Fragment>
    )
}


export default Dairy;