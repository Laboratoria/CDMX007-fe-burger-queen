import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';


export class FoodGrid extends React.Component {
render()      {
        return (  
          <div id = "grid-menu">
            <Grid columns='equal' divided inverted padded>
    
            <Grid.Row color='black' textAlign='center'>
              <Grid.Column>
                <Segment color='black' inverted>
                  DESAYUNO 1
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color='black' inverted>
                  DESAYUNO 2
                </Segment>
              </Grid.Column>
              <Grid.Column>
                <Segment color='black' inverted>
                  DESAYUNO 3
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          </div>
 )
   }

 }  
 