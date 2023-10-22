import styled from 'styled-components';
import Nav from '../../components/Navbar'
import fb from '../../images/facebook.svg';
import ig from '../../images/instagram.svg';
import twitter from '../../images/twitter.svg';
import account from '../../images/account.svg';
import lock from '../../images/lock.png';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(227, 232, 238, 0.4);
  height: 670px;
  width: calc(100% - px);
  margin: 0px 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 60px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
`;

const TempHeader = styled.div`
  height: 60px;
  width: 100%;
`;

const TitleLogin = styled.div`
  font-size: 34px;
  font-weight: bold;
  color: #3E82A8;
  align-items: center;
`;

const EmailPassBox = styled.div`
  display: grid;
  margin: 20px;
  gap: 15px;
`;

const StyledInput = styled.input`
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  margin-left: 5px;

  &:focus {
    outline: none;
  }
`;

const EmailPassWord = styled.div`
  color: #738392;
  font-weight: bold;
  font-size: 16px;
`;

const RedLogin = styled.button`
  background-color: #F67171;
  border-radius: 10px;
  color: #FFFFFF;
  width: 80px;
  height: 30px;
  border: 0px;
  margin: 10px;
  box-shadow: rgba(100, 100, 111, 0.25) 0px 2px 2px;
  font-weight: bold;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
    cursor: pointer;
  }
`;

const ForgotSignUp = styled.div`
  color: #738392;
  font-size: 12px;
`;
const GreyLine = styled.div`
  background-color: #B9B9B9;
  height: 1px;
  width: 80%;
  margin-top: 15px;
`;

const NewAcc = styled.button`
  background-color: #E7E7E7;
  border-radius: 10px;
  color: #FFFFFF;
  width: 150px;
  height: 30px;
  border: 0px;
  margin: 15px;
  color: #738392;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px;
  margin-bottom: 30px;
  font-weight: bold;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;

  &:hover {
    transform: scale(1.03);
    cursor: pointer;
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
    cursor: pointer;
  }
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: row;
  margin: 15px;
  gap: 15px;
`;

const ImageInput = styled.div`
display: flex;
  top: 12px;
  left: 15px;
  align-items: center;

  border-radius: 20px;
  width: 400px;
  height: 30px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: rgb(120, 120, 120, 1.0);

  &::placeholder {
    color: rgba(201, 201, 201, 0.8);
  }
`;

function Login() {
  return (
    <div>
      <Nav />
      <LoginContainer>
      <TitleLogin>Log in</TitleLogin>

      <EmailPassBox>
        
        
        <EmailPassWord>Email</EmailPassWord>
        <ImageInput>
          <img src={account} style={{height: 'auto', width: '18px', marginBottom: '-3px'}}/>
          <StyledInput src={account} type="text" placeholder="Type your email"/>
        </ImageInput>
        
        <EmailPassWord>Password</EmailPassWord>
        <ImageInput>
          <img src={lock} style={{height: 'auto', width: '18px'}}/>
          <StyledInput src={lock} type="password" placeholder="Type your password"/>
        </ImageInput>
      </EmailPassBox>

      <RedLogin>Log in</RedLogin>
      <ForgotSignUp>Forgotten password?</ForgotSignUp>
      <GreyLine></GreyLine>
      <NewAcc>Create new account</NewAcc>
      <ForgotSignUp>Or Sign Up Using</ForgotSignUp>

      <SocialMedia>
        <img src={fb} alt="Facebook Logo" />
        <img src={ig} alt="Instagram Logo" />
        <img src={twitter} alt="Twitter Logo" />
      </SocialMedia>
    </LoginContainer>
    </div>
  )
}

function Signup() {

}

export default Login;