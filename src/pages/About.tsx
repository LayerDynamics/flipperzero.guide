import { Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import styled from 'styled-components';

const AboutContainer = styled(Card)`
  display: flex;
  margin-top: 250px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  flex-direction: column; /* Stack children vertically */
  align-items: center; /* Center items horizontally */
  justify-content: start; /* Align items to start from the top */
  gap: 20px; /* Space between items */
  color: rgb(255, 130, 0);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  margin: 20px; /* Note: This will override the margin-top property above */
`;

function About() {
  return (
    <AboutContainer className="text-center">
      <Card.Body>
        <Card.Title>About This Project <FaInfoCircle /></Card.Title>
        <Card.Text>
          This site hopes to serve as a more comprehensive guide on how to actually use the flipper zero.
        </Card.Text>
        <Card.Text>
          It showcases the power of modern web development tools and libraries, aiming to provide a clear path for building scalable and maintainable web applications.
        </Card.Text>
      </Card.Body>
    </AboutContainer>
  );
}

export default About;
