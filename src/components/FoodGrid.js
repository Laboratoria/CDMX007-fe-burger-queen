import React from 'react';
import { Grid } from 'semantic-ui-react';
import BreakfastFont from './BreakfastFont';
export class FoodGrid extends React.Component {
render()      { 
  
        return (  
          <div id = "grid-menu">
            <Grid columns='equal' divided inverted padded>
                 
            <Grid.Row color='black' textAlign='center'> 
                <BreakfastFont></BreakfastFont>
            </Grid.Row>
          </Grid>
          </div>
 )
   }

 }  
 