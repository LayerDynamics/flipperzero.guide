import { Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa'; // Make sure to import FaInfoCircle
import styled from 'styled-components';

const AboutContainer = styled(Card)`
  display: flex;
  margin-top: 250px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  gap: 20px;
  color: rgb(255, 130, 0);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  font-family: 'GravityBold8', sans-serif;
  margin: 30px;
`;

const Text = styled.div` // Changed from styled.p to styled.div for consistency
  font-family: 'Born2bSportyV2', monospace;
  font-size: 18pt;
`;

function Home() {
  return (
    <AboutContainer className="text-center">
      <Card.Body>
        <Card.Title>
          <Title>About This Website <FaInfoCircle /></Title>
        </Card.Title>
        <Text>
          This site hopes to serve as a more comprehensive guide on how to
          actually use the flipper zero.
        </Text>
        <Text>
          For relevant information that explains how to utilize the various
          tools the flipper supplies in a real-world way, head over to the{' '}
          <b>Newbie Guide</b>.
        </Text>
        <Text>
          For More Advanced Topics and Guides head over to the Advanced Guide
          page.
        </Text>
      </Card.Body>
    </AboutContainer>
  );
}

export default Home;
