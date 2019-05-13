import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import fireBase from './config-firebase/FireBase';
import './login-firebase.css';
import FooterLogin from './components/Footer-login';
import Waiter from './components/Waiter'
import Logologin from './components/Logo-login';
import CrownImg from './components/Crown';



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
                   <label for="Email">Introduce tu email</label>
                   <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                   
                  </div>
                <div>
                   <label for="InputPassword">Password</label>
                    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    {/* <small id="emailText" className="">No muestres tu contraseña a nadie</small> */}
                </div >
                   <div className="row">
                  <button type="submit" onClick={this.login} className=" waves-effect btn-small light-blue darken-3  col s10 offset-s1 m4  offset-m1">Ingresar</button>
                        <button onClick={this.signup} className=" waves-effect btn-small white blue-text  col s10 offset-s1 m4 offset-m2">Registro</button>
               </div> 
               </form>
 </div>
 </div>

    );
  }
}
export default LoginFirebase;