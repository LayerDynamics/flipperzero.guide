import { Routes, Route } from 'react-router-dom';
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
import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import SearchComponent from '../components/SearchComponent';

export const StyledContainer = styled(Container)`
  // Assuming Container is a div at its core, adjust as needed
  margin-top: 0px; // Directly applying the style mentioned in GuideNavigation
`;
function Guide() {
  return (
    <StyledContainer>
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
    </StyledContainer>
  );
}

export default Guide;
