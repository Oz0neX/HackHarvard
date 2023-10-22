import styled from 'styled-components';
import { COLOR, FONT_SIZE, FONT_COLOR } from '../../constants';

// Horizontal Chat Container, thinking of making Vertical chat container
const ChatContainer = styled.div`
	flex: 1;
	height: calc(100%-50px);
	display: flex;
	flex-direction: column;
	justify-content: end;
	font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;

`;

const MessageContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 20px;
`;

const MessageColumn = styled.div`
	display: flex;
	flex-direction: column;
	padding-top: 10px;
	margin-top: 2px;
	font-weight: 600;
`;

const Message = styled.div`
	color: #000000cc;
`;

function newMessage(messageData) {
	let getProfilePicture = () => {
		if (messageData.sameSender) return;
		return (
			<img
				alt="UserProfile"
				src={messageData.profilePicture}
				style={{
					aspectRatio: '1/1',
					height: '50px',
					borderRadius: '50%',
					marginRight: '15px',
				}}
			></img>
		);
	};

	if (messageData.sameSender) return;
	return (
		<MessageContainer>
			{getProfilePicture()}
			<div>
				<MessageColumn>{messageData.messages}</MessageColumn>
			</div>
		</MessageContainer>
	);
}

function renderMessages(newMessages) {
	let components = [];
	for (let i = 0; i < newMessages.length; i++) {
		// If an element has already been wrapped, don't wrap it again
		if (newMessages[i].wrapped) {
			components[i] = newMessage(newMessages[i]);
			continue;
		}
		newMessages[i].wrapped = true;
		let currentMsg = newMessages[i];
		for (let j = 0; j < currentMsg.messages.length; j++) {
			currentMsg.messages[j] = (
				<Message key={currentMsg.id}>{currentMsg.messages[j]}</Message>
			);
		}
		components[i] = newMessage(currentMsg);
	}
	return components;
}

function Messaging(msgs) {
	let messages = renderMessages(msgs);
	return (
		<ChatContainer>
			{messages}
		</ChatContainer>
	);
}

export default Messaging;