import React from 'react'; 
import {Breakfast} from '../data/Breakfast';
import {props} from 
const Breakfast = (props) => {

    let aBreakfast = Breakfast.map ((food) => {
        return (
            <div className = "breakfast-container">
                <a>
                    <div className = "breakfast-image"></div>
                </a>
                <h3>{food.name}</h3>
            </div>
        )
    }


    )
};