import styled from 'styled-components';

import desktopBg from '../images/bg-intro-desktop.png';
import mobileBg from '../images/bg-intro-mobile.png';
import errorIcon from '../images/icon-error.svg';

import {colors, setting} from './global.js'

export const Body = styled.div`
font-family: 'Poppins', sans-serif;
background:  url(${desktopBg}), linear-gradient(${colors.primaryRed}, ${colors.primaryRed});
height: 100%;

@media (max-width: ${setting.mobile}){
    background:  url(${mobileBg}), linear-gradient(${colors.primaryRed}, ${colors.primaryRed});
    padding-bottom: 12%;
}
`;
export const Container = styled.div`
width: 100%;
height: 100vh;
margin: 0 auto;
color: ${colors.white};
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
@media (max-width: ${setting.mobile}){
    flex-direction: column;
    height: 100%;
}
@media (max-width: ${setting.tablet}){
    flex-direction: column;
}
`;

export const Headlines = styled.div`
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
  line-height: 1.2;
  margin: 15px 0;
}
@media (max-width: ${setting.mobile}){
    max-width: 326px;
    text-align: center;
    margin-right: 0;
    margin-top: 20%;
    margin-bottom: 13%;
    h3{
        font-size: 1.7em;
      }      
}
@media (max-width: ${setting.tablet}){
    margin-right: 0;
    flex-basis: 30%;
}
`;

export const SignupForm = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
flex-basis: 50%;
max-width: 540px;
@media (max-width: ${setting.mobile}){
    max-width: 326px;
}

form{
  box-sizing: border-box;
  width: 100%;
  padding 40px;
  margin: 25px 0;
  border-radius: 10px;
  background: #fff;
  box-shadow: 0px 8px 1px  ${colors.purpleBlue};
  @media (max-width: ${setting.mobile}){
      padding: 20px;
  }

}
.inputs{
    clear: both;
    margin-bottom: 20px;
}
input{
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  width: 100%;
  font-size: 0.9em;
  font-weight: 500;
  padding: 15px 20px;
  border: 1px solid ${colors.grayishBlue};
  border-radius: 5px;
  outline: none;
  transition: border 0.5s ease;
}

input:focus{
  color: ${colors.textDarkGray};
  border: 1px solid ${colors.neutralDarkBlue};
}

input.error{
    color: ${colors.primaryRed};
    border: 2px solid ${colors.primaryRed};
    background-image: url(${errorIcon});
    background-repeat: no-repeat;
    background-position: 97%;
}

.error-text{
    display:block;
    font-size: 0.7em;
    font-style: italic;
    font-weight: 500;
    color: ${colors.primaryRed};
    float: right;
    margin: 10px 0 20px;
}

.disclaimer{
  width: 100%;
  display: inline-block;
  margin-top: 12px;
  text-align: center;
  color: ${colors.textLightGray};
  font-size: 0.7em;
  font-weight: 500;
}

.bold-red{
  font-weight: 700;
  color: ${colors.primaryRed};
}
`;

export const Button = styled.button`
color: #fff;
font-family: 'Poppins', sans-serif;
font-size: 1em;
font-weight: 700;
text-transform: uppercase;
outline: none;
cursor: pointer;
width: 100%;
padding: 20px 0;
background-color: ${colors.primaryGreen};
border: 1px solid ${colors.primaryGreen};
border-radius: 5px;
box-shadow: inset 0 -2px 3px ${colors.purpleBlue};
`;
export const Banner = styled.div`
width: 100%;
text-align:center;
border-radius: 12px;
box-shadow: 0px 8px 1px  ${colors.purpleBlue};
background-color: ${colors.accentBlue};
@media (max-width: ${setting.mobile}){
  p{
      margin: 20px auto;
      max-width: 200px;
  }  
}

.bold{
  font-weight: 700;
}
`;