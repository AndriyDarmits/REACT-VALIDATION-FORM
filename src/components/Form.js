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
    },() => {
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
    return <div>too short</div>
    }
    else if (this.state.email === "") {
      return <div>field is empty</div>
    } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)) { 
      return <div>Invalid email</div>
    }
  }

  validetePassword() {
    if (this.state.password.length <= 8 && this.state.password.length >= 1) {
      return <div>too short</div>
      }
      else if (this.state.password === "") {
        return <div>field is empty</div>
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.state.password)) { 
        return <div>at least one uppercase letter, one lowercase letter, one number, one special character</div>
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
    return ( 
      <div className="form__block">
        <h2 className="form__header">Sign in</h2>
      <div className="form">
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
            <div className="error__block">
              {this.valideteEmail()}
              {this.validetePassword()}
            </div>
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
      </div>
        <button className = "submit_btn" onClick = {this.onHandleSubmit} disabled = {this.state.isValid ? "" : true}>Submit</button>
      </form>
  </div>
      </div>
   
  )
  }
}
