import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//se incluye el componente App
import App from './views/App';
import * as serviceWorker from './serviceWorker';


//se renderiza el componente App, con el id del html como segundo parámetro.Es donde se inyectará
//toda la lógica de la aplicación.

ReactDOM.render(<App/>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
