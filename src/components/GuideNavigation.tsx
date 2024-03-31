// import { Nav } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom'; // Import NavLink for its activeClassName prop
// import styled from 'styled-components';

// const StyledNav = styled(Nav)`
//   margin: 20px;
//   display: flex;
//   color: rgb(255, 130, 0);
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 10px 10px 28px rgba(0, 0, 0, 0.559);
//   padding: 5px;
// `;

// const StyledNavLink = styled(NavLink)` // Use NavLink for activeClassName handling
//   text-decoration: none;
//   color: black;
//   padding: 10px 15px;
//   border: 1px solid #ccc;
//   border-bottom: none;
//   margin-right: 4px;

//   &.active {
//     background-color: white;
//     border-color: #ccc;
//     border-bottom-color: white;
//     position: relative;
//     z-index: 1;
//   }
// `;

// const GuideNavigation = () => {
//   return (
//     <StyledNav variant="tabs" defaultActiveKey="/guide/firmware">
//       <Nav.Item>
//         <StyledNavLink to="/guide/Firmware" activeClassName='active'>Firmware</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/BadUsb" activeClassName='active'>BadUsb</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/Marauder" activeClassName='active'>Marauder</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/Apps" activeClassName='active'>Apps</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/Infrared" activeClassName='active'>Infrared</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/IButton" activeClassName='active'>IButton</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/NFC" activeClassName='active'>NFC</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/RFID" activeClassName='active'>RFID</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/SubGhz" activeClassName='active'>SubGhz</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/GPIO" activeClassName='active'>GPIO</StyledNavLink>
//       </Nav.Item>
//       <Nav.Item>
//         <StyledNavLink to="/guide/U2f" activeClassName='active'>U2f</StyledNavLink>
//       </Nav.Item>
//       {/* Add more Nav.Link components for additional guide parts as needed */}
//     </StyledNav>
//   );
// };

// export default GuideNavigation;
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; // Removed unused Link import
import styled from 'styled-components';

const StyledNav = styled(Nav)`
  margin: 20px;
  display: flex;
  color: rgb(255, 130, 0);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 10px 10px 28px rgba(0, 0, 0, 0.559);
  padding: 5px;
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-bottom: none;
  margin-right: 4px;

  &.active {
    background-color: white;
    border-color: #ccc;
    border-bottom-color: white;
    position: relative;
    z-index: 1;
  }
`;

const GuideNavigation = () => {
  return (
    <StyledNav variant="tabs" defaultActiveKey="/guide/firmware">
      {[
        { to: "/guide/Firmware", label: "Firmware" },
        { to: "/guide/BadUsb", label: "BadUsb" },
        { to: "/guide/Marauder", label: "Marauder" },
        { to: "/guide/Apps", label: "Apps" },
        { to: "/guide/Infrared", label: "Infrared" },
        { to: "/guide/IButton", label: "IButton" },
        { to: "/guide/NFC", label: "NFC" },
        { to: "/guide/RFID", label: "RFID" },
        { to: "/guide/SubGhz", label: "SubGhz" },
        { to: "/guide/GPIO", label: "GPIO" },
        { to: "/guide/U2f", label: "U2f" },
      ].map((item) => (
        <Nav.Item key={item.to}>
          <StyledNavLink
            to={item.to}
            className={({ isActive }) => isActive ? 'active' : undefined}
          >
            {item.label}
          </StyledNavLink>
        </Nav.Item>
      ))}
    </StyledNav>
  );
};

export default GuideNavigation;
