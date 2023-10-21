import Nav from '../../components/Navbar'
import styled from 'styled-components';
import conversation from './images/conversation.png';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: rgba(227, 232, 238, 0.4);
  height: 804px;
  width: calc(100% - px);
  margin: 0px 200px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
`;

const TitleLogin = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #3E82A8;
  align-items: center;
  margin: 15px;
`;

const SendUsMessage = styled.div`
  font-size: 22px;
  color: #403F3F;
  align-items: center;
  margin: 15px;
  line-height: 30px;
`;

const EmailPassWord = styled.div`
  color: #738392;
  font-weight: bold;
  font-size: 20px;
`;

const StyledInput = styled.input`
  border-radius: 20px;
  width: 400px;
  height: 30px;
  padding: 0 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: rgb(120, 120, 120, 1.0);
`;

const StyledInput2 = styled.textarea`
  border-radius: 20px;
  width: 400px;
  height: 300px;
  padding: 10px 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  color: rgb(120, 120, 120, 1.0);
  resize: none;
  overflow: hidden;
  line-height: 30px;
`;

const EmailPassBox = styled.div`
  display: grid;
  margin: 20px;
  gap: 15px;
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
  text-align: center;
`;

function Dashboard() {
  return (
    <LoginContainer>

        <Left>
          <img src="./HackHarvard/frontend/src/images/conversation.png" alt="conversation"/>
        </Left>

        <Right>
          <TitleLogin>Contact us</TitleLogin>
          <SendUsMessage>Send us a message and we will get back to you as soon as possible!</SendUsMessage>

          <EmailPassBox>
            <EmailPassWord>Name</EmailPassWord>
            <StyledInput type="text"/>
            <EmailPassWord>Email</EmailPassWord>
            <StyledInput type="text"/>
            <EmailPassWord>Message</EmailPassWord>
            <StyledInput2 type="text"/>
          </EmailPassBox>

          <RedLogin>Submit</RedLogin>
        </Right>

    </LoginContainer>
  );
}

export default Dashboard;