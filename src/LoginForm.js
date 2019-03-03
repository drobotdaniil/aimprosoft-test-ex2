import React, { Component } from 'react';
import { FormErrors } from './FormErrors';
import { FormErrorsFalse } from './FormErrorsFalse';
import mail_ico from './img/mail.png';
import lock_ico from './img/lock.png';

import './style.css';



class LoginForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: null,
      passwordValid: null,
      formValid: false
    }
  }

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value},
                  () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch(fieldName) {
      case 'email':
        emailValid = value === "designer@gmail.com";
        fieldValidationErrors.email = emailValid ? '' : 'Email is invalid';
        break;
      case 'password':
        passwordValid = value === "123123";
        fieldValidationErrors.password = passwordValid ? '': 'Password is wrong';
        break;
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    emailValid: emailValid,
                    passwordValid: passwordValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit} className="wrapper">
        <div className="header-text">
            <span className="bold">Bank</span>
            Support Portal
        </div>
        <div className="login-wrap">
            <div className="email">
                <img className = "ico" src = {mail_ico} alt=""/>
                <input required className="inputs"  
                  name = "email"
                  type="email" 
                  value= {this.state.email}
                  onChange={this.handleUserInput}
                  placeholder="E-mail"/>
                  <FormErrorsFalse isValid={this.state.emailValid} />
            </div>
            <FormErrors formErrors={this.state.formErrors.email} />


            <div className="password"> 
                <img className = "ico" srcSet = {lock_ico} alt="" />
                <input required className="inputs"  
                  name = "password"
                  type="password"  
                  value= {this.state.password}
                  onChange={this.handleUserInput}
                  placeholder="Password"/>
                  <FormErrorsFalse isValid={this.state.passwordValid} />
            </div>
            <FormErrors formErrors={this.state.formErrors.password} />
            

            <div className="log-butt"><button className = "submit-butt" type="submit" disabled={!this.state.formValid}>Login</button></div> 
            <div className="text-bottom">Forgot your password?
                <a href="https://google.com.ua" className="reset">Reset it here.</a>
            </div>                     
        </div>
    </form>
    );
  }
}

export default LoginForm;
