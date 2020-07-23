import React, { useState } from 'react';
import { Body, Container, Headlines, SignupForm, Button, Banner } from './styles/elements.js';

function Form(){
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    validated: false,
    errors:{
        firstName: 'First name cannot be empty',
        lastName: 'Last name cannot be empty',
        email: 'Looks like this is not an email',
        password: 'Password cannot be empty'
      }
  });
  
  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  const handleChange = e => {
    const {name, value} = e.target;
    let errors = formInput.errors;

    switch(name){
      case "firstName":
        errors.firstName = value.length === 0 ? 'First name cannot be empty' : '';
        break;
      case "lastName":
        errors.lastName  = value.length === 0 ? 'Last name cannot be empty' : '';
        break;
      case "password":
        errors.password = value.length === 0 ? 'Password cannot be empty' : '';
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? '': 'Looks like this is not an email';
        break;
      default:
        break;
    }
    setFormInput({...formInput, [name]: value, errors: errors});
  }

  const handleSubmit = e => {
    e.preventDefault();
    setFormInput({...formInput, validated: true});
    console.log("submitted", formInput);
  }
  return(
    <form onSubmit={handleSubmit}>
      <div className="inputs">
        <input type="text" className={formInput.errors.firstName.length > 0 && formInput.validated ? "error": ''} placeholder="First Name" name="firstName" 
        onChange={handleChange} value={formInput.firstName}></input>
        {formInput.errors.firstName.length > 0 && formInput.validated &&
        <span className="error-text">{formInput.errors.firstName}</span>}
      </div>
      <div className="inputs">
        <input type="text" className={formInput.errors.lastName.length > 0 && formInput.validated ? "error": ''} placeholder="Last Name" name="lastName" 
        onChange={handleChange} value={formInput.lastName}></input>
        {formInput.errors.lastName.length > 0 && formInput.validated &&
        <span className="error-text">{formInput.errors.lastName}</span>}
      </div>
      <div className="inputs">
        <input placeholder="Email Address" className={formInput.errors.email.length > 0 && formInput.validated ? "error": ''}  name="email" 
        onChange={handleChange} value={formInput.email}></input>
        {formInput.errors.email.length > 0 && formInput.validated &&
          <span className="error-text">{formInput.errors.email}</span>}
      </div>
      <div className="inputs">
        <input type="password" placeholder="Password" className={formInput.errors.password.length > 0 && formInput.validated ? "error": ''}  name="password"
        onChange={handleChange} value={formInput.password}></input>
        {formInput.errors.password.length > 0 && formInput.validated &&
          <span className="error-text">{formInput.errors.password}</span>}
      </div>

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
