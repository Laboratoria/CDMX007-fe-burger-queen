import React from 'react';
import './login.css';
import EnterButton from '../components/enter-button';
import Logologin from '../components/logo-login';
// import { ReactComponent } from '*.svg';



class Login extends React.Component {
    render(){
        return(
            <div> <EnterButton/>
            <Logologin/>
            </div>   
        )
    }
}


export default Login;
