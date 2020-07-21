import React, { useState } from 'react';
import { Body, Container, Headlines, SignupForm, Button, Banner } from './styles/elements.js';

function Form(){
  const [formInput, setFormInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = e => {
    console.log(e.target.value);
    setFormInput({...formInput, [e.target.name]: e.target.value});
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
      <input type="email" placeholder="Email Address" name="email" 
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
          <Form></Form>
        </SignupForm>
      </Container>
    </Body>
  );
}


export default App;
