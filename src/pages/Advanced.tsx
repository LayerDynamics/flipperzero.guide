import { Routes, Route } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import AdvancedNavigation from '../components/AdvancedNavigation';
import Page1 from './AdvancedPages/Page1';
import Page2 from './AdvancedPages/Page2';
import Page3 from './AdvancedPages/Page3';

// Styled card container to replace the Bootstrap Container for consistent styling
const StyledCardContainer = styled.div`
	border-radius: 10px;
	border: 5px solid #ffff;
  margin-top: 20px; // Adjusted margin-top as per your layout
  padding: 10px; // Add padding inside the card for spacing
  background-color: #ffff; // Assuming a white background, adjust as needed
  box-shadow: 0px 4px 8px rgba(0, 0, 2, 0.3); // Example shadow, adjust as needed
`;

function Advanced() {
  return (
    <StyledCardContainer>
      <Card>
        <Card.Body>

          <AdvancedNavigation />
          <Routes>
            <Route path="page1" element={<Page1 />} />
			<Route path="page2" element={<Page2 />} />
			<Route path="page3" element={<Page3 />} />
            {/* Define more routes as needed */}
          </Routes>
        </Card.Body>
      </Card>
    </StyledCardContainer>
  );
}

export default Advanced;
