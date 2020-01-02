import React from 'react';
import CarbPic from '../images/carb.jpg';

function Carb() {
    return (
        <React.Fragment>
            <div style={{background: 'rgba(255, 255, 255, 0.5)', width: '60%', marginLeft: '20%', marginTop: '3%', textAlign: 'center'}}>
            <h1>Carbohydrates</h1>
            <p>Low-carbohydrate diets may miss the health advantages – such as increased intake of dietary fiber – afforded by high-quality carbohydrates found in legumes and pulses, whole grains, fruits, and vegetables. Disadvantages of the diet might include halitosis, headache and constipation, and in general the potential adverse effects of carbohydrate-restricted diets are under-researched, particularly for possible risks of osteoporosis and cancer incidence.

Carbohydrate-restricted diets can be as effective as low-fat diets in helping achieve weight loss over the short term when overall calorie intake is reduced. An Endocrine Society scientific statement said that "when calorie intake is held constant [...] body-fat accumulation does not appear to be affected by even very pronounced changes in the amount of fat vs carbohydrate in the diet." In the long term, effective weight loss or maintenance depends on calorie restriction, not the ratio of macronutrients in a diet. The reasoning of diet advocates that carbohydrates cause undue fat accumulation by increasing blood insulin levels, and that low-carbohydrate diets have a "metabolic advantage", is not supported by clinical evidence. Further, it is not clear how low-carbohydrate dieting affects cardiovascular health, although two reviews showed that carbohydrate restriction may improve lipid markers of cardiovascular disease risk.</p>
            <img src={CarbPic} style={{width: '100%'}}/>
            </div>
        </React.Fragment>
    )
}


export default Carb;