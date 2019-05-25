import React from 'react';
import './Input.css'




class Input extends React.Component{


    render(){
        return (  
         
            <div className="row input-login">
            <form className="col  s6 offset-s3 m3 offset-m7 ">
                <div>
                  
                  <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control form-pass" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Introduce tu email" />
                  
                 </div>
               <div>
                
                   <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control form-pass" id="exampleInputPassword1" placeholder="Contraseña" />

               </div >
                  <div className="row">
                 <button type="submit" onClick={this.login} className="login-btn waves-effect  btn-small  col s10 offset-s1 m4  offset-m1 inputColor">Ingdfgresar</button>
                       <a onClick={this.signup} href="#!" className="blue-text text-darken-1 col s10 offset-s1 m4 offset-m2">¿Nuevo? Regístrate</a>
              </div> 
              </form>
</div>
           
        )
    }
}

export default Input;