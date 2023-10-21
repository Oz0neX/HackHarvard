import Nav from '../../components/Navbar'
import styled, { keyframes } from 'styled-components';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../../constants';
import chair from '../../images/chair.png'

const Landing = styled.div`
  background-color: ${COLOR.tertiary};
  width: calc(100% - 470px);
  height: 350px;
  padding: 130px 180px;
  margin: 30px 55px;
`;

const PoweredBy = styled.div`
  width: max-content;
  border-radius: 40px;
  padding: 2px 10px;
  margin-bottom: 5px;
  background-color: ${FONT_COLOR.tertiary};
  font-family: Spot Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
`;

const Title = styled.div`
  color: ${FONT_COLOR.quarternary};
  font-size: 3.75em;
  font-family: TT Firs Neue,ui-serif,Georgia,Cambria,Times New Roman,Times,serif;
  font-weight: 800;
`;

const TitleDescription = styled.div`
  margin: 35px 0px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
  font-size: ${FONT_SIZE.lg};
  max-width: 800px;
  line-height: 1.8em;
`

const HelpButton = styled.button`
	all: unset;
	padding: 10px 20px;
	color: white;
  font-size: ${FONT_SIZE.lg};
	background-color: ${COLOR.secondary};
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
	height: min-content;
	font-family: 'Lato';
	font-weight: bold;
	border-radius: 2px;
	margin: 8px 0px;
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
		background-color: ${COLOR.secondaryHover};
		outline: 1px solid ${FONT_COLOR.primary};
		cursor: pointer;
	}
`;

const LearnMore = styled.button`
	all: unset;
	padding: 10px 20px;
	color: #34404B;
  font-size: ${FONT_SIZE.lg};
	background-color: #A1A1A1;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
	height: min-content;
	font-family: 'Lato';
	font-weight: bold;
	border-radius: 2px;
	margin: 8px 30px;
	&:hover {
		animation-name: ${keyframes`
			0% {
				background-color: #A1A1A1;
				outline-width: 0px;
			}
			100% {
				background-color: ${COLOR.primary};
				outline-width: 1px;
			}
		`};
		animation-duration: 0.1s;
		background-color: ${COLOR.primary};
		outline: 1px solid ${FONT_COLOR.primary};
		cursor: pointer;
	}
`;

const Container = styled.div`
  width: calc(100% - 470px);
  margin: 8px 55px;
  padding: 0px 180px;
`;

// Goes right above the subtitles, modifies it.
const Amplifier = styled.div`
  color: ${FONT_COLOR.primary};
  font-size: ${FONT_SIZE.lg};
  font-family: Spot Mono,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;
  font-weight: bolder;
`;

const Subtitle = styled.div`
	color: ${FONT_COLOR.quarternary};
  font-size: ${FONT_SIZE.xxl};
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
  font-weight: bold;
`;

const Description = styled.div`
  margin-top: 20px;
	color: ${FONT_COLOR.quarternary};
  font-size: ${FONT_SIZE.lg};
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
`;

// Container with image and description
const ImgDescContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 600px;
  background-color: ${COLOR.tertiary};
  width: 100%;
  margin: 80px 0px;
`;

const LadyInChair = styled.img`
  height: 100%;
  min-width: 50%;
  object-fit: cover;
  object-position: 40% 50%;
`;

const InnerContainer = styled.div`
  width: calc(50%-60px);
  padding: 40px;
`;

const Footer = styled.div`
  background-color: ${COLOR.primary};
  height: 120px;
  width: calc(100%-60pxs);
  padding: 30px;
`;

function Home() {
  return (
    <div>
      <Nav></Nav>
      <Landing>
        <PoweredBy>Powered By GPT 3.5</PoweredBy>
        <Title><xy style={{color: COLOR.primary}}>New to Caretaking?</xy> <br/>EverEase is here for you.</Title>
        <TitleDescription>
          Whether you are a family member, friend, or dedicated caregiver, you don’t have to navigate this path alone. You'll find a community that understands and a chatbot specialist ready to assist.
        </TitleDescription>
        <HelpButton>Get Help</HelpButton>
        <LearnMore>Learn More</LearnMore>
      </Landing>
      
      <Container>
        <Amplifier style={{marginTop: '60px'}}>WELCOME TO THE FUTURE</Amplifier>
        <Subtitle>
          Embracing the future of care.
        </Subtitle>
        <Description>
          Our platform is designed specifically for non-professional caregivers, providing a safe space to ask any question about caregiving for individuals facing mental health challenges.
        </Description>

        <ImgDescContainer>
          <LadyInChair src={chair}></LadyInChair>
          <InnerContainer>
            <Amplifier>A NEW CHALLENGE IS HERE</Amplifier>
            <Subtitle>
              Will you adapt?
            </Subtitle>
            <Description style={{lineHeight: "1.75em"}}>
              Transitioning to our AI Caregiver is like welcoming a new member to your caregiving team. With its tireless dedication, vast knowledge, and unwavering support, you'll find a partner that complements and enhances your caregiving journey. Together, we're redefining compassionate care in the digital age. Embrace the future with our AI Caregiver – where innovation meets heart.
            </Description>
          </InnerContainer>
        </ImgDescContainer>
      </Container>

      <Footer></Footer>
    </div>
  );
}

export default Home;