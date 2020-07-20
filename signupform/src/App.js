import React from 'react';
import logo from './logo.svg';
import desktopBg from './images/bg-intro-desktop.png';
// import './App.css';

import {colors} from './styles/global.js'
import styled from 'styled-components';

const Body = styled.div`
  font-family: 'Poppins', sans-serif;
  background: linear-gradient(${colors.primaryRed}, ${colors.primaryRed}), url(${desktopBg});
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
          </form>
        </SignupForm>
      </Container>
    </Body>
  );
}

export default App;