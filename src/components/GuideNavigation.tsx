// import { Nav } from 'react-bootstrap';
// import { NavLink } from 'react-router-dom'; // Removed unused Link import
// import styled from 'styled-components';

// const StyledNav = styled(Nav)`
//   padding: 70px;
//   display: flex;
//   color: rgb(255, 130, 0);
//   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 10px 10px 28px rgba(0, 0, 0, 0.559);
//   padding: 5px;
// `;

// const StyledNavLink = styled(NavLink)`
//   text-decoration: none;
//   color: black;
//   padding: 10px 15px;
//   border: 1px solid #ccc;
//   border-bottom: none;
//   margin-right: 4px;

//   &.active {
//     background-color: white;
//     border-color: #000000;
//     border-bottom-color: #000000;
//     position: relative;
//     z-index: 1;
//   }
// `;

// const GuideNavigation = () => {
//   return (
//     <StyledNav variant="tabs" defaultActiveKey="/guide/firmware">
//       {[
//         { to: "/guide/Firmware", label: "Firmware" },
//         { to: "/guide/BadUsb", label: "BadUsb" },
//         { to: "/guide/Marauder", label: "Marauder" },
//         { to: "/guide/Apps", label: "Apps" },
//         { to: "/guide/Infrared", label: "Infrared" },
//         { to: "/guide/IButton", label: "IButton" },
//         { to: "/guide/NFC", label: "NFC" },
//         { to: "/guide/RFID", label: "RFID" },
//         { to: "/guide/SubGhz", label: "SubGhz" },
//         { to: "/guide/GPIO", label: "GPIO" },
//         { to: "/guide/U2f", label: "U2f" },
//       ].map((item) => (
//         <Nav.Item key={item.to}>
//           <StyledNavLink
//             to={item.to}
//             className={({ isActive }) => isActive ? 'active' : undefined}
//           >
//             {item.label}
//           </StyledNavLink>
//         </Nav.Item>
//       ))}
//     </StyledNav>
//   );
// };

// export default GuideNavigation;
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  padding: 20px;
  display: flex;
	border-radius: 10px;
	border: 5px solid #ffff;
  justify-content: space-around; /* Adjust as needed for spacing */
  flex-wrap: wrap; /* Allows wrapping for smaller screens */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 10px 10px 28px rgba(0, 0, 0, 0.559);
`;

const StyledNavLink = styled(NavLink)`
  display: inline-block;
  background-color: #FF8200; /* Button background color */
  color: white; /* Button text color */
  text-decoration: none;
  padding: 10px 15px;
  margin: 5px; /* Adjust the margin for more separation */
  border: none;
  border-radius: 5px; /* Button border-radius */
  cursor: pointer;

  &:hover, &.active {
    background-color: #fb810f; /* Button hover and active state */
  }
`;

const GuideNavigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/guide/Firmware">Firmware</StyledNavLink>
      <StyledNavLink to="/guide/BadUsb">BadUsb</StyledNavLink>
      <StyledNavLink to="/guide/Marauder">Marauder</StyledNavLink>
      <StyledNavLink to="/guide/Apps">Apps</StyledNavLink>
      <StyledNavLink to="/guide/Infrared">Infrared</StyledNavLink>
      <StyledNavLink to="/guide/IButton">IButton</StyledNavLink>
      <StyledNavLink to="/guide/NFC">NFC</StyledNavLink>
      <StyledNavLink to="/guide/RFID">RFID</StyledNavLink>
      <StyledNavLink to="/guide/SubGhz">SubGhz</StyledNavLink>
      <StyledNavLink to="/guide/GPIO">GPIO</StyledNavLink>
      <StyledNavLink to="/guide/U2f">U2f</StyledNavLink>
      {/* Define more routes as needed */}
    </StyledNav>
  );
};

export default GuideNavigation;
