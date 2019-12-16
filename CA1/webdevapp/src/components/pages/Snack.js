import React from 'react';
import SnackPic from '../../snack.jpg';

function Snack() {
    return (
        <React.Fragment>
            <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '60%', marginLeft: '20%', marginTop: '3%', textAlign: 'center'}}>
            <h1>Snacks</h1>
            <p>AVOID AT ALL COSTS!!!</p>
            <img src={SnackPic} style={{width: '100%'}}/>
            </div>
        </React.Fragment>
    )
}


export default Snack;