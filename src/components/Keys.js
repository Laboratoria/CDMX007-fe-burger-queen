class Form extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          password: ' ',
         
      };
  }

  handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
  }

 onSubmit = (e) => {
     e.preventDefault();
     const form = {
    password: this.state.password
     }
       {/* -----------you would send data to API to get results, I used database for ease, this also clears the form on submit----------------*/}
     database.push(form);
     this.setState({
          password: ''
     })
  }

  render() {
      return (
          <div>
         
            
                   <div>
                   <input id = "key" type="password" name="password" placeholder = "intruduce tu clave"  onChange={this.onChange}/>
                   </div>
                    password='password'
                      value={this.state.name}
                      onChange={e => this.handleChange(e)}/>
                      <Button onClick={(e) => this.onSubmit(e)}>ENTRAR</Button>
                            
             
          </div>
      );
  }
}

export default Form;