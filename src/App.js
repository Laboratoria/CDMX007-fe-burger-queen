import React, {Component} from 'react';
import Navbar from './components/navbar';
import Login from './components/login';
import './App.css';



class App extends Component{
  render(){
    return(
      <div className="App">
      <Navbar title="Burguer Queen"/>
      <Login header="Burguer Queen"/>
      </div>
    )
  }
}





export default App;


// function App() {
//   return (

//     <div pageXOffsetassName="App">
//      <Navbar></Navbar>
//         <p className="App-header">
//          Burguer Queen
//         </p>

//     </div>

//   );
// }