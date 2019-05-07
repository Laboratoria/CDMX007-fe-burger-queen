import React from 'react';




function Welcome(props) {
    return <h1>Hola, {props.name}</h1>;
  }
  
  

function AppTwo() {
    return (
      <div>
        <Welcome name="Uva" />
        <Welcome name="Willy" />
        <Welcome name="Hani" />
        <Welcome name="Bruna" />
        <Welcome name="Jake" />
        <Welcome name="Claudia" />

      </div>
    );
  }
  export default AppTwo;