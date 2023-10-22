import styled from 'styled-components';
import Nav from '../../components/Navbar';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../../constants';
import { useState }from 'react';
import Messaging from './Response';
import { MdOutlineArrowCircleRight } from 'react-icons/md';

const Subtitle = styled.div`
	color: ${FONT_COLOR.quarternary};
  font-size: ${FONT_SIZE.xxl};
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
  font-weight: bold;
  margin-top: 30px;
`;

const Description = styled.div`
	color: ${FONT_COLOR.quarternary};
  font-size: ${FONT_SIZE.lg};
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
`;

const ChatContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: column;
  flex-grow: 1;
  background-color: ${COLOR.tertiary};
  height: calc(90vh - 200px);
  width: calc(100% - 700px);
  margin-top: 15px;
  padding: 0px 40px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
  font-size: ${FONT_SIZE.lg};
`;

const MainCont = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const ResponseContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  margin-top: 30px;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: white;
  padding: 10px 20px;
  outline: solid 1px gray;
  min-height: max-content;
  width: calc(100% - 40px);
  margin-bottom: 40px;
`;

const UserInput = styled.input`
  all: unset;
  min-height: max-content;
  width: 100%;
  word-wrap: break-word;
  line-height: 1.25em;
  max-height: 65px;
  overflow-y: scroll;
  scrollbar-width: none;
  flex: 1;
`;

const Divider = styled.div`
  background-color: gray;
  height: 1px;
  width: 100%;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const SendButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover * {
		color: ${COLOR.secondaryHover};
	}
`;

// Midjourney
// StableDiffusion

function Dashboard() {
  let sampledata = [
    {
      profilePicture: 'https://www.w3schools.com/howto/img_avatar.png',
      sender: 'AI',
      messages: ['Hi! How can I help you today?'],
      id: 1,
    }
  ];

  const [msg, setMsg] = useState("");
  const [msgs, setMessages] = useState(sampledata);
  
  // Is there anything I can do to create a safer environment for my loved one?
  function AIMessage(msgT) {
    setMessages([...msgs, 
      {
        profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3kZgJa6V-svDDKKVB884dvMqyuBjZjUfeA&usqp=CAU',
        sender: 'Human',
        messages: [msg],
        id: msgs.length+1,
      },{
      profilePicture: 'https://www.w3schools.com/howto/img_avatar.png',
      sender: 'AI',
      messages: [msgT],
      id: msgs.length+1,
    }])
  }

  function handleSend() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://127.0.0.1:8000/snippets/?input=' + msg);
    setMessages([...msgs, {
      profilePicture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH3kZgJa6V-svDDKKVB884dvMqyuBjZjUfeA&usqp=CAU',
      sender: 'Human',
      messages: [msg],
      id: msgs.length+1,
    }])
    xhr.onload = function() {
      if (xhr.status === 200) {
        AIMessage(JSON.parse(xhr.responseText)['result']);
      }
    };
    xhr.send();
  }

  return (<div>
    <Nav></Nav>
    <MainCont>
      <Subtitle>Welcome Back, Yasir</Subtitle>
      <div style={{backgroundColor: 'grey', width: 'calc(100% - 1100px)', height: '1px', margin: '10px 0px 30px 00px'}}></div>
      <Description>Speak to EverEase Assistant</Description>
      <ChatContainer>
        <ResponseContainer>
          {Messaging(msgs)}
        </ResponseContainer>
        <Divider></Divider>
        <InputBox>
          <UserInput onChange={(e) => {setMsg(e.target.value)}} onKeyDown={(e)=>{if (e.key=='Enter') {setMsg(e.target.value); handleSend(); e.target.value=""}}} placeholder="Send a message e.g. “Tips for calming an agitated loved one”"></UserInput>
          <SendButton onClick={handleSend}>
						<MdOutlineArrowCircleRight
							style = {{
                height: '30px',
                width: '30px',
                color: COLOR.secondary,
                paddingLeft: '10px',
              }}
						></MdOutlineArrowCircleRight>
					</SendButton>
        </InputBox>
      </ChatContainer>
    </MainCont>

  </div>);
}

export default Dashboard;