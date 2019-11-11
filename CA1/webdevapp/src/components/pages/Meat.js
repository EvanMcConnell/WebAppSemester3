import React from 'react';
import MeatPic from '../../meat.jpg';

function Meat() {
    return (
        <React.Fragment>
            <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '60%', marginLeft: '20%', marginTop: '3%', textAlign: 'center'}}>
            <h1>Meat</h1>
            <p>All muscle tissue is very high in protein, containing all of the essential amino acids, and in most cases is a good source of zinc, vitamin B12, selenium, phosphorus, niacin, vitamin B6, choline, riboflavin and iron. Several forms of meat are also high in vitamin K. Muscle tissue is very low in carbohydrates and does not contain dietary fiber. While taste quality may vary between meats, the proteins, vitamins, and minerals available from meats are generally consistent.</p>
            <img src={MeatPic} style={{width: '100%'}}/>
            </div>
        </React.Fragment>
    )
}


export default Meat;