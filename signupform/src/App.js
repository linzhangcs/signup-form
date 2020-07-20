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
`;

const SignupForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Banner = styled.div`
  background-color: ${colors.accentBlue}
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
            <p>Try it free 7 days then $20/mo. thereafter</p>
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
