import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(227, 232, 238, 0.4);
  height: 804px;
  width: calc(100% - px);
  margin: 0px 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const TempHeader = styled.div`
  height: 60px;
  width: 100%;
`;

const TitleLogin = styled.div`
  font-size: 36px;
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

const EmailPassWord = styled.div`
  color: #738392;
  font-weight: bold;
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
`;


function Login() {
  return (
    <LoginContainer>
      <TitleLogin>Log in</TitleLogin>

      <EmailPassBox>
        <EmailPassWord>Email</EmailPassWord>
        <StyledInput type="text" placeholder="Type your email"/>
        <EmailPassWord>Password</EmailPassWord>
        <StyledInput type="password" placeholder="Type your password"/>
      </EmailPassBox>

      <RedLogin>Log in</RedLogin>
      <ForgotSignUp>Forgotten password?</ForgotSignUp>
      <GreyLine></GreyLine>
      <NewAcc>Create new account</NewAcc>
      <ForgotSignUp>Or Sign Up Using</ForgotSignUp>
    </LoginContainer>
  )
}

function Signup() {

}

export default Login;