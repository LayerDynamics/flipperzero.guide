import { Routes, Route } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import Firmware from './GuidePages/Firmware';
import Marauder from './GuidePages/Marauder';
import Apps from './GuidePages/Apps';
import BadUsb from './GuidePages/BadUsb';
import Infrared from './GuidePages/Infrared';
import IButton from './GuidePages/IButton';
import NFC from './GuidePages/NFC';
import RFID from './GuidePages/RFID';
import SubGhz from './GuidePages/SubGhz';
import GPIO from './GuidePages/GPIO';
import U2f from './GuidePages/U2f';
import GuideNavigation from '../components/GuideNavigation';
import SearchComponent from '../components/SearchComponent';

// Styled card container to replace the Bootstrap Container for consistent styling
const StyledCardContainer = styled.div`
	border-radius: 10px;
	border: 5px solid #ffff;
  margin-top: 20px; // Adjusted margin-top as per your layout
  padding: 10px; // Add padding inside the card for spacing
  background-color: #ffff; // Assuming a white background, adjust as needed
  box-shadow: 0px 4px 8px rgba(0, 0, 2, 0.3); // Example shadow, adjust as needed
`;

function Guide() {
  return (
    <StyledCardContainer>
      <Card>
        <Card.Body>
          <SearchComponent />
          <GuideNavigation />
          <Routes>
            <Route path="Firmware" element={<Firmware />} />
            <Route path="Marauder" element={<Marauder />} />
            <Route path="Apps" element={<Apps />} />
            <Route path="BadUsb" element={<BadUsb />} />
            <Route path="GPIO" element={<GPIO />} />
            <Route path="IButton" element={<IButton />} />
            <Route path="Infrared" element={<Infrared />} />
            <Route path="NFC" element={<NFC />} />
            <Route path="RFID" element={<RFID />} />
            <Route path="SubGhz" element={<SubGhz />} />
            <Route path="U2f" element={<U2f />} />
            {/* Define more routes as needed */}
          </Routes>
        </Card.Body>
      </Card>
    </StyledCardContainer>
  );
}

export default Guide;
