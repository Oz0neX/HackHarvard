import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../constants';
import everEase from '../images/everease.png';

const Navbar = styled.nav`
	width: 100%;
	height: 60px;
	display: flex;
	flex-direction: row;
  font-weight: bold;
`;

const LeftContainer = styled.div`
	flex: 30%;
	display: flex;
	align-items: center;
	padding: 10px 50px;
`;

const RightContainer = styled.div`
	flex: 70%;
	display: flex;
	justify-content: flex-end;
	padding-right: 10px;
`;

const Center = styled.div`
	font-family: 'Open Sans';
	font-size: ${FONT_SIZE.lg};
	display: flex;
	align-items: center;
	justify-content: flex-end;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
  height: 50px;
	padding: 10px 10px;
`;

const HelpButton = styled.button`
	all: unset;
	padding: 0px 20px;
	transform: translateY(8px);
	color: white;
	background-color: ${COLOR.secondary};
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
	height: 35px;
	font-family: 'Lato';
	font-weight: bold;
	border-radius: 2px;
	margin: 8px 40px;
	&:hover {
		animation-name: ${keyframes`
			0% {
				background-color: ${COLOR.secondary};
				outline-width: 0px;
			}
			100% {
				background-color: ${COLOR.secondaryHover};
				outline-width: 1px;
			}
		`};
		animation-duration: 0.1s;
		transform: translateY(8px);
		background-color: ${COLOR.secondaryHover};
		outline: 1px solid ${FONT_COLOR.primary};
		cursor: pointer;
	}
`;

const navbarLinkHover = () => {
	return keyframes`
		0% { color: ${FONT_COLOR.primary}; background-color: ${COLOR.primary + '00'}};
		100% { color: ${FONT_COLOR.primaryHover}; background-color: ${
		COLOR.primary + '56'
	}};
	`;
};

const NavbarLink = styled(Link)`
	text-decoration: none;
  font-family: Spot Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
	padding: 0px 34px;
	margin: 0px 3px;
	color: #111827;
	&:hover {
		padding-top: 2px;
		padding-bottom: 2px;
		border-radius: 20px;
		outline: 1px solid black;
		color: ${FONT_COLOR.primaryHover};
		background-color: ${COLOR.primary}56;
		animation-name: ${navbarLinkHover};
		animation-duration: 0.2s;
	}
`;

const AIContainer = styled.div`
  padding-top: 15px;
  color: white;
  width: 20px;
  font-size: 16px;
  display: flex;
  align-items: center;
  margin-left: 10px;
`;

const AI = styled.div`
  border-radius: 40px;
  padding: 2px 10px;
  background-color: ${FONT_COLOR.tertiary};
  font-family: Spot Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
`;

function Nav() {
	return (
		<Navbar>
			<LeftContainer>
				<button
					style={{ all: 'unset', cursor: 'pointer', display: 'flex'}}
					onClick={() => {
						window.location.href = '/';
					}}
				>
					<img src={everEase} style={{height: 'auto', width: '180px', marginTop: '10px'}}></img>
          <AIContainer><AI>AI</AI></AIContainer>
				</button>
			</LeftContainer>
			<RightContainer>
				<div style={{ height: 'calc(100% - 16px)' }}>
					<HelpButton
						onClick={() => {
							window.location.href = '/dashboard';
						}}
					>
						Get Help
					</HelpButton>
				</div>
			</RightContainer>
			<Center>
      <NavbarLink>OVERVIEW</NavbarLink>
      <NavbarLink>CONTACT</NavbarLink>
      <NavbarLink>HELP</NavbarLink>
			</Center>
		</Navbar>
	);
}

export default Nav;