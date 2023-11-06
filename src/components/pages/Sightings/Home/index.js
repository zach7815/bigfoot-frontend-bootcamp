import React from "react";
import StyledButton from "../../../atoms/styledButton";
import styled from 'styled-components';  // Import styled from styled-components
import SpeechBubble from "../../../atoms/speechBubble";

const HomeContainer = styled.div`  // Use styled.div instead of styled('div')
  background-color: #282c34;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BigFootLinksContainer = styled.div`  // Use styled.div instead of styled('div')
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 100%;
`;


const SpeechBubbleContainer = styled.div`  // Use uppercase for the component name
  height: fit-content;
  align-self: end;
  margin-bottom: 1.5rem;
  margin-right: 1rem;
`;

const ButtonsContainer=styled.div`
display: flex;
`

const Home = ({ handleClick }) => {
  const BigFootUrl = process.env.PUBLIC_URL + '/images/BigFoot.png';
  const shockedEmojiUrl = process.env.PUBLIC_URL + '/images/shockedEmoji.png';
  return (
    <HomeContainer>
      <div>
        <img src={BigFootUrl} alt="BigFoot monster" />
      </div>

      <BigFootLinksContainer>
        <div style={{ display: 'flex' }}>
          <SpeechBubbleContainer>  {/* Use SpeechBubbleContainer */}
            <SpeechBubble
              text="Omg! It's BigFoot!"
              animation="pop"
              direction="r"
              shape='round'
              bubblecolor="white"
              bordercolor="black"
            />
          </SpeechBubbleContainer>
          <img src={shockedEmojiUrl} alt="shocked emoji face" />
        </div>

        <ButtonsContainer>
         <StyledButton variant="contained" onClick={handleClick}>
          See All Sightings
        </StyledButton>
         <StyledButton variant="contained" onClick={handleClick}>
          Report a sighting
        </StyledButton>
        </ButtonsContainer>

      </BigFootLinksContainer>
    </HomeContainer>
  );
};

export default Home;