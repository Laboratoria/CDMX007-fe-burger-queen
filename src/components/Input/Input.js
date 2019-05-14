import React from 'react';





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
                 <button type="submit" onClick={this.login} className="login-btn waves-effect  btn-small  col s10 offset-s1 m4  offset-m1">Ingresar</button>
                       <button onClick={this.signup} className=" register-btn waves-effect btn-small white blue-text text-darken-1 col s10 offset-s1 m4 offset-m2">Registrarse</button>
              </div> 
              </form>
</div>
           
        )
    }
}

export default Input;