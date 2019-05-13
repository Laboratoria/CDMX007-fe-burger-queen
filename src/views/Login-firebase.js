import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import fireBase from '../config-firebase/FireBase';
import './login-firebase.css';
import FooterLogin from '../components/Footer-login';
import Waiter from '../components/Waiter'
import Logologin from '../components/Logo-login';
import CrownImg from '../components/Crown';



class LoginFirebase extends Component {
  constructor(props) {
    super(props);
     this.login = this.login.bind(this);
            this.handleChange = this.handleChange.bind(this);
                 this.signup = this.signup.bind(this);
        this.state = {
            email: '',
             password: ''
    };
  }

  handleChange(e) {
     this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
            fireBase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            }).catch((error) => {
        console.log(error);
        alert('Contraseña incorrecta')
      });
  }

  signup(e){
    e.preventDefault();
            fireBase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
                }).then((u)=>{console.log(u)})
                 .catch((error) => {
             console.log(error);
      })
  }
  render() {
    return (
<div>
  <Waiter/>
  <FooterLogin/>
  <Logologin/>
 <CrownImg/>
 

          <div className="row input-login">
             <form className="col  s6 offset-s3 m3 offset-m7 ">
                 <div>
                   
                   <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control form-pass" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu email" />
                   
                  </div>
                <div>
                 
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control form-pass" id="exampleInputPassword1" placeholder="Contraseña" />

                </div >
                   <div className="row">
                  <button type="submit" onClick={this.login} className="login-btn waves-effect yellow darken-1 btn-small  col s10 offset-s1 m4  offset-m1">Ingresar</button>
                        <button onClick={this.signup} className=" register-btn waves-effect btn-small white yellow-text text-darken-1 col s10 offset-s1 m4 offset-m2">Registrarse</button>
               </div> 
               </form>
 </div>
 </div>

    );
  }
}
export default LoginFirebase;