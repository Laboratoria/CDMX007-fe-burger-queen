import React from 'react';
import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
} from 'semantic-ui-react';



const GridExampleEqualWidthColumn = () => (
  <Grid columns='equal'>
    <Grid.Column>
     
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>
    

<Grid centered columns = {2}>
<Grid.Column floated='center' width={8}>
  <Header as = "h2" textAlign = "center">
  <h1>burger</h1>
  <h2>queen</h2>
  </Header>
  <Segment>
    <Form id = "form-box" size = "large">
    <Form.Input id = "input-form" fluid placeholder = "escribe tu clave" type = "password"/>
   <Button color = "orange" fluid size = "large">
   Entrar
   </Button>

    </Form>
  </Segment>

</Grid.Column>
</Grid>


      </Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment></Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleEqualWidthColumn






























