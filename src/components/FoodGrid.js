import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';


export class FoodGrid extends React.Component {
render()      { 
  
        return (  
          <div id = "grid-menu">
            <Grid columns='equal' divided inverted padded>
                 
            <Grid.Row color='black' textAlign='center'>
              <Grid.Column>
                <Segment color='black' inverted /> 
                <img src="http://162.144.95.215/~dqphilippines/wp-content/uploads/2015/12/hamswiss.png" alt="sandwich"/>
              </Grid.Column>
              <Grid.Column>
                <Segment color='black' inverted>
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color='black' inverted>
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
 )
   }

 }  
 