
import styled from 'styled-components';

// Reusing styled components for consistent styling
const StyledCard = styled.div`
  margin-top: 50px;
  color: #000000;
  box-shadow: 10px 14px 28px rgba(0, 0, 0, 0.559);
  justify-content: center;
  text-align: center;
  padding: 20px;
  border-radius: 0.25rem; // Assuming a rounded card
  background-color: #fff; // Assuming a white background
`;

const CardBody = styled.div`
  justify-content: center;
  margin: 10px;
`;

const Title = styled.h3`
  font-family: 'GravityBold8', sans-serif;
  text-decoration: underline;
  padding: 10px;
`;

const Text = styled.a`
  font-family: 'Born2bSportyV2', monospace;
  font-size: 14pt;
  color: inherit; // Keeps the link color the same as the text color
  text-decoration: none;
  display: block; // Each link on its own line

  &:hover {
    text-decoration: underline;
  }
`;

const RepositoryList = () => {
  return (
    <StyledCard>
      <CardBody>
        <Title>Useful Repositories</Title>
        <Text href="https://github.com/djsime1/awesome-flipperzero" target="_blank" rel="noopener noreferrer">
          Awesome Flipper Zero- a compiled list of resources
        </Text>
        <Text href="https://github.com/flipperdevices/flipperzero-firmware" target="_blank" rel="noopener noreferrer">
          Official Flipper Zero Firmware
        </Text>
				<Text href="https://github.com/Next-Flip/Momentum-Firmware" target="_blank" rel="noopener noreferrer">
          Momentum Firmware
        </Text>
				<Text href="https://github.com/Flipper-XFW/Xtreme-Firmware" target="_blank" rel="noopener noreferrer">
          Extreme Firmware
        </Text>
				<Text href="https://github.com/DarkFlippers/unleashed-firmware" target="_blank" rel="noopener noreferrer">
          Unleashed Firmware
        </Text>
				{/* <Text href="https://github.com/username/repo2" target="_blank" rel="noopener noreferrer">
          Repository 2
        </Text>
				<Text href="https://github.com/username/repo2" target="_blank" rel="noopener noreferrer">
          Repository 2
        </Text> */}
        {/* Add more repositories as needed */}
      </CardBody>
    </StyledCard>
  );
};

export default RepositoryList;
