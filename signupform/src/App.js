import React from 'react';
import logo from './logo.svg';
import desktopBg from './images/bg-intro-desktop.png';
// import './App.css';

import {colors} from './styles/global.js'
import styled from 'styled-components';

const Body = styled.div`
  font-family: 'Poppins', sans-serif;
  background:  url(${desktopBg}), linear-gradient(${colors.primaryRed}, ${colors.primaryRed});
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Headlines = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 60px;
  max-width: 510px;
  flex-basis: 50%;
  font-weight: 500;
  h3{
    font-size: 3em;
    font-weight: 700;
    line-height: 1;
    margin: 15px 0;
  }
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 50%;
  max-width: 540px;

  form{
    box-sizing: border-box;
    width: 100%;
    padding 40px;
    margin: 25px 0;
    border-radius: 10px;
    background: #fff;
    box-shadow: 0px 10px 1px  ${colors.purpleBlue};
  }
  
  input{
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
    margin-bottom: 20px;
    width: 100%;
    font-size: 0.9em;
    font-weight: 500;
    padding: 15px 20px;
    border: 1px solid ${colors.grayishBlue};
    border-radius: 5px;
  }

  .green-btn{
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 1em;
    font-weight: 700;
    text-transform: uppercase;
    width: 100%;
    padding: 20px 0;
    background-color: ${colors.primaryGreen};
    border: 1px solid ${colors.primaryGreen};
    border-radius: 5px;
  }

  .disclaimer{
    width: 100%;
    display: inline-block;
    text-align: center;
    color: ${colors.textLightGray};
    font-size: 0.7em;
    font-weight: 500;
  }
`;

const Banner = styled.div`
  width: 100%;
  text-align:center;
  border-radius: 12px;
  box-shadow: 0px 10px 1px  ${colors.purpleBlue};
  background-color: ${colors.accentBlue};

  .bold{
    font-weight: 700;
  }
`;
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
            <p><span class="bold">Try it free 7 days </span>then $20/mo. thereafter</p>
          </Banner>
          <form>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="email" placeholder="Email Address"></input>
            <input type="password" placeholder="Password"></input>
            <button class="green-btn" type="submit">claim your free trial</button>
            <span class="disclaimer">By clicking the button, you are agreeing to our Terms and Services</span>
          </form>
        </SignupForm>
      </Container>
    </Body>
  );
}

export default App;
