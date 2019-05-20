import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import {BreakfastItems} from '../data/Breakfast';

const Breakfast = (props) => {

    let aBreakfast = BreakfastItems.map ((food) => {
        return (
            <Grid.Column>
            <Segment color='black' inverted /> 
            <div className = "breakfast-container">
                <a>
                    <div className = "breakfast-image">
                        <img src={food.img_src} alt={food.name}></img>
                    </div>
                </a>
                <h3>{food.name}</h3>
            </div>
          </Grid.Column>
           
        )
    }


    );

    return aBreakfast;
};

export default Breakfast;