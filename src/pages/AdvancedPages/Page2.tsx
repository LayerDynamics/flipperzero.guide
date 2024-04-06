
import styled from 'styled-components';
import { FaReact } from 'react-icons/fa';

// Styled components
const StyledCard = styled.div`
  text-align: center;
  margin-top: 100px;
  color: #ff8200;
  box-shadow: 10px 14px 28px rgba(0, 0, 0, 0.559);
  border-radius: 0.25rem; // Bootstrap default border-radius for cards
  background-color: #fff; // Assuming a white background for the card
  padding: 1rem; // Adjust as needed for internal padding
`;

const StyledCardBody = styled.div`
  padding: 1.25rem; // Bootstrap default padding for card-body
`;

function Page2() {
  return (
    <StyledCard>
      <StyledCardBody>
        Welcome to Page2! <FaReact />
      </StyledCardBody>
    </StyledCard>
  );
}

export default Page2;
