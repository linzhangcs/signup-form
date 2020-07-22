import React, { useState } from 'react';
import { Body, Container, Headlines, SignupForm, Button, Banner } from './styles/elements.js';

function Form(){
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    errors:{
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      }
  });
  
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const handleChange = e => {
    console.log(e.target.value);
    const {name, value} = e.target;

    let errors = formInput.errors;
    console.log("errors", errors);
    switch(name){
      case "firstName":
        errors.firstName = value.length === 0 ? 'First name cannot be empty' : '';
        console.log(errors);
        break;
      case "lastName":
        errors.lastName  = value.length === 0 ? 'Last name cannot be empty' : '';
        break;
      case "password":
        errors.password = value.length === 0 ? 'Last name cannot be empty' : '';
        // error = value.length === 0 ? 'password cannot be empty' : '';
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? '': 'Looks like this is not an email';
        break;
      default:
        break;
    }
    setFormInput({['errors']: errors});
    setFormInput({...formInput, [name]: value});

  }

  const handleSubmit = e => {
    e.preventDefault();
    
    console.log("submitted", formInput);
  }
  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="First Name" name="firstName" 
      onChange={handleChange} value={formInput.firstName}></input>
      <input type="text" placeholder="Last Name" name="lastName" 
      onChange={handleChange} value={formInput.lastName}></input>
      <input placeholder="Email Address" name="email" 
      onChange={handleChange} value={formInput.email}></input>
      <input type="password" placeholder="Password" name="password"
      onChange={handleChange} value={formInput.password}></input>
      <Button type="submit">claim your free trial</Button>
      <span className="disclaimer">By clicking the button, you are agreeing to our 
      <span className="bold-red">Terms and Services</span></span>
    </form>
  );
};

function App() {
  return (
    <Body>
      <Container>
        <Headlines>
          <h3>Learn to code by watching others</h3>
          <p>See how experienced developers solve problems in real-time.
            Watching scripted tutorials is great, but understanding how 
            developers think is invaluable.
          </p>
        </Headlines>
        <SignupForm>
          <Banner>
            <p><span className="bold">Try it free 7 days </span>then $20/mo. thereafter</p>
          </Banner>
          <Form />
        </SignupForm>
      </Container>
    </Body>
  );
}


export default App;
