import React from 'react';

function Dinner(props){
    return (
        <div>
            <h2>{props.dishName} is ready</h2>
            <h2>But i need {props.dishName2} first</h2>
            <hr/>
        </div>
    )
}
export default Dinner;