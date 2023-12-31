import Nav from '../../components/Navbar'
import styled, { keyframes } from 'styled-components';
import { FONT_COLOR, FONT_SIZE, COLOR } from '../../constants';
import chair from '../../images/chair.png'
import care from '../../images/careservice.jpg'
import carenobg from '../../images/careservice.png'

const Landing = styled.div`
  display: flex;
  width: calc(100% - 470px);
  height: 450px;
  padding: 120px 180px;
  padding-bottom: 50px;
  margin: 40px 55px;
  border-radius: 10px;
  margin-top: 15px;
`;

const PoweredBy = styled.div`
  width: max-content;
  border-radius: 40px;
  padding: 2px 10px;
  margin-bottom: 5px;
  color: white;
  font-size: 10px;
  background-color: ${FONT_COLOR.tertiary};
  font-family: Spot Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
`;

const Title = styled.div`
  color: ${FONT_COLOR.quarternary};
  font-size: 3.25em;
  font-family: TT Firs Neue,ui-serif,Georgia,Cambria,Times New Roman,Times,serif;
  font-weight: 800;
  line-height: 65px;
  width: 740px;
  margin-top: 15px;
`;

const TitleDescription = styled.div`
  margin: 35px 0px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
  font-size: ${FONT_SIZE.lg};
  max-width: 500px;
  line-height: 30px;
  color: #403F3F;
  margin-bottom: 20px;
`

const HelpButton = styled.button`
	all: unset;
	padding: 10px 20px;
	color: white;
  font-size: ${FONT_SIZE.lg};
	background-color: ${COLOR.secondary};
  box-shadow: rgba(100, 100, 111, 0.25) 0px 2px 2px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
	height: min-content;
	font-family: 'Lato';
	font-weight: bold;
	border-radius: 10px;
	margin: 8px 0px;
	
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
	border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px;
	margin: 8px 30px;
	
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
	color: #403F3F;
  font-size: ${FONT_SIZE.lg};
  line-height: 30px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
`;

// Container with image and description
const ImgDescContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 600px;
  background-color: ${COLOR.tertiary};
  width: 100%;
  margin: 60px 0px;
  border-radius: 10px;
  color: #403F3F;
  line-height: 50px;
`;

const LadyInChair = styled.img`
  height: 100%;
  min-width: 50%;
  object-fit: cover;
  object-position: 40% 50%;
  border-radius: 10px 0px 0px 10px;
  border: 1px solid rgba(0, 0, 0, 0.4);
`;

const InnerContainer = styled.div`
  width: calc(50%-60px);
  padding: 40px;
`;

const Footer = styled.div`
  display: block;
  background-color: #95CEEE;
  height: auto;
  width: 100%;
`;

const TopLeft = styled.div`
display: flex;
flex-direction: column;
  gap: 20px;
  
`;

const TopRight = styled.div`
  
`;

const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px 60px;
  
`;

const SubForUpdates = styled.button`
  background-color: #E7E7E7;
  border-radius: 10px;
  color: #FFFFFF;
  width: 200px;
  height: 30px;
  border: 0px;

  color: #738392;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 2px;
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

const GreyLine = styled.div`
  background-color: #565656;
  height: 1px;
  width: calc(100% - 120px);
  margin-top: 15px;
`;

const Copyright = styled.div`
  padding: 20px 60px;
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
  color: #828282;
  font-size: 12px;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

const SubText = styled.div`
font-size: 14px;
font-weight: bold;
color: #3E82A8;
align-items: center;
font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
`;

const LatestNews = styled.div`
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", Segoe UI Symbol, "Noto Color Emoji" !important;
  color: #524F4F;
`;

const LandingLeft = styled.div`
  width: 50%;
`;

const LandingRight = styled.div`
  width: 50%;
`;

const CareIMG = styled.img`
  width: 700px;
  height: auto;
`;

function Home() {
  return (
    <div>
      <Nav></Nav>
      <Landing>
        <LandingLeft>
          <PoweredBy>Powered By GPT 3.5</PoweredBy>
          <Title><xy style={{color: COLOR.primary}}>New to Caretaking?</xy> <br/>EverEase is here for you.</Title>
          <TitleDescription>
            Whether you are a family member, friend, or dedicated caregiver, you don’t have to navigate this path alone. You'll find a community that understands and a chatbot specialist ready to assist.
          </TitleDescription>
          <HelpButton onClick={() => {
							window.location.href = '/dashboard';
						}}>Get Help</HelpButton>
          <LearnMore onClick={() => {
							window.location.href = '/contactus';
						}}>Learn More</LearnMore>
        </LandingLeft>

        <LandingRight>
          <CareIMG src={carenobg}/>
        </LandingRight>
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

      <Footer>
        <Top>
          <TopLeft>
            <SubText>SUBSCRIBE FOR UPDATES</SubText>
            <LatestNews>Get the latest news and resources sent to your inbox.</LatestNews>
          </TopLeft>

          <TopRight>
            <SubForUpdates>Subscribe for updates</SubForUpdates>
          </TopRight>
        </Top>

        <Bottom>
          <GreyLine></GreyLine>

          <Copyright>© 2024 Everease, Inc. All rights reserved.</Copyright>
        </Bottom>

      </Footer>
    </div>
  );
}

export default Home;