import React from 'react';
import './Login.css';
import EnterButton from '../components/Enter-button';
import Logologin from '../components/Logo-login';
import FooterLogin from '../components/Footer-login'
import Waiter from '../components/Waiter';
import Password from '../components/Password-area'
// import { ReactComponent } from '*.svg';



class Login extends React.Component {

    render(){
        return(
            <div> 
                <EnterButton/>
                    <Logologin/>
                        <Waiter/>
                   <Password/>
              <FooterLogin/>
            </div>
       
        )
    }


}


export default Login;
