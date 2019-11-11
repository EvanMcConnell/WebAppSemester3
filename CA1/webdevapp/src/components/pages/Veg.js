import React from 'react';
import VegPic from '../../veg.jpg';

function Veg() {
    return (
        <React.Fragment>
            <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '60%', marginLeft: '20%', marginTop: '3%', textAlign: 'center'}}>
            <h1>Veg</h1>
            <p>Vegetables play an important role in human nutrition. Most are low in fat and calories but are bulky and filling. They supply dietary fiber and are important sources of essential vitamins, minerals, and trace elements. Particularly important are the antioxidant vitamins A, C, and E. When vegetables are included in the diet, there is found to be a reduction in the incidence of cancer, stroke, cardiovascular disease, and other chronic ailments. Research has shown that, compared with individuals who eat less than three servings of fruits and vegetables each day, those that eat more than five servings have an approximately twenty percent lower risk of developing coronary heart disease or stroke. The nutritional content of vegetables varies considerably; some contain useful amounts of protein though generally they contain little fat, and varying proportions of vitamins such as vitamin A, vitamin K, and vitamin B6; provitamins; dietary minerals; and carbohydrates.</p>
            <img src={VegPic} style={{width: '100%'}}/>
            </div>
        </React.Fragment>
    )
}


export default Veg;