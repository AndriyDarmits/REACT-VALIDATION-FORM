import React, { Component } from 'react';

export default class form extends Component {

  constructor(props) {
    super(props);
    this.onHandleInput = this.onHandleInput.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.valideteEmail = this.valideteEmail.bind(this);
    this.state = {
      email: "",
      password: "",
      isValid: false
   }
  }

  onHandleInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      if ((this.state.email.length > 8 && (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email))) &&
      (this.state.password.length > 8 && /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.state.password))) {
      this.setState({
        isValid: true});
    } else {
      this.setState({
        isValid: false});
    }
    })
  }

  valideteEmail() {
    if (this.state.email.length <= 8 && this.state.email.length >= 1) {
    return <p>too short</p>
    }
    else if (this.state.email === "") {
      return <p>field is empty</p>
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) { 
      return <p>Invalid email</p>
    }
  }

  validetePassword() {
    if (this.state.password.length <= 8 && this.state.password.length >= 1) {
      return <p>too short</p>
      }
      else if (this.state.password === "") {
        return <p>field is empty</p>
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.state.password)) { 
        return <p>at least one uppercase letter, <br/>one lowercase letter,<br/> one number, <br/> one special character</p>
      }
  }
  
  onHandleSubmit(e){
    e.preventDefault();
    alert(JSON.stringify(this.state))
    this.setState({
        email: "",
        password: "",
        isValid:false
    })
  }
  

  
  



  render() {
    return( 
    <div className="form__block">
      <h2 className="form__header">Sign up</h2>
      <form action="/" method="get" >
          <div className="email">
            <input 
              name='email'
              type="email"  
              className="login" 
              placeholder="Email..."
              required
              value={this.state.email}
              onChange={this.onHandleInput}
            />
            <div>{this.valideteEmail()}</div>
          </div>
          
          <div className="password">
            <input 
            name = "password"
            type= "password" 
            className="password" 
            placeholder="Password..."
            required
            value={this.state.password}
            onInput={this.onHandleInput}
            /> 
            <div>{this.validetePassword()}</div>
      </div>
        
        <button className = "submit_btn" onClick = {this.onHandleSubmit} disabled = {this.state.isValid ? "" : true}>Submit</button>
      </form>
      
  </div>
  )
  }
}
