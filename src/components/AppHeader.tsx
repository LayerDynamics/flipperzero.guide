// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import styled, { css } from 'styled-components'
// import logo from '/logos/orange_text_transparent_white_1000px.png'
// import { GiHamburgerMenu } from 'react-icons/gi'

// // const StyledNavbar = styled.nav`
// //   position: fixed;
// //   top: 0;
// //   width: 100%;
// //   display: flex;
// //   justify-content: space-between;
// //   padding: 0.5rem 1rem;
// //   background-color: #FF8200;
// //   box-shadow: 10px 10px 28px rgba(0, 0, 0, 0.559);
// //   margin-top: 20px;
// //   margin-bottom: 100px;
// //   z-index: 1030;
// // `;

// const StyledNavbar = styled.nav`
//   position: fixed;
//   top: 0;
//   width: 100%;
//   display: flex;
//   justify-content: space-between;
//   padding: 0.5rem 1rem;
//   background-color: #ff8200;
//   box-shadow: 10px 10px 28px rgba(0, 0, 0, 0.559);
//   margin-top: 20px;
//   margin-bottom: 100px;
//   z-index: 1030;
// `

// const StyledContainer = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 100%;
// `

// const Brand = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
// `

// const StyledNav = styled.div`
//   display: flex;
//   align-items: center;
//   margin-left: auto;
//   position: relative;
// `

// const Text = styled.p`
//   padding-top: 18px;
//   font-family: Born2bSportyV2, monospace;
//   font-size: 30pt;
//   color: white;
// `

// const NavLink = styled.a`
//   font-family: Born2bSportyV2, sans-serif;
//   font-size: 20pt;
//   color: white;
//   text-decoration: none;
//   cursor: pointer;

//   &:hover {
//     text-decoration: underline;
//   }
// `

// const DropdownContent = styled.div`
//   display: none;
//   position: absolute;
//   background-color: #f9f9f9;
//   min-width: 160px;
//   box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
//   z-index: 1;
//   right: 0;
//   top: 100%;

//   &.show {
//     display: block;
//   }
// `

// const DropdownLink = styled.div`
//   font-family: Born2bSportyV2, sans-serif;
//   font-size: 18pt;
//   color: black;
//   padding: 12px 16px;
//   text-decoration: none;
//   display: block;

//   &:hover {
//     background-color: #f1f1f1;
//   }
// `
// const StyledHamburgerMenu = styled(GiHamburgerMenu)`
//   font-size: 2rem;
//   color: #fff;
//   cursor: pointer;
//   transition: transform 0.3s ease;

//   ${({ isOpen }) =>
//     isOpen &&
//     css`
//       transform: rotate(90deg);
//     `}
// `
// const AppHeader = () => {
//   const [dropdownVisible, setDropdownVisible] = useState(false)
//   const navigate = useNavigate()

//   const handleNavigate = (path) => {
//     setDropdownVisible(false) // Close the dropdown
//     navigate(path)
//   }

//   return (
//     <StyledNavbar>
//       <StyledContainer>
//         <Brand onClick={() => handleNavigate('/')}>
//           <img src={logo} height="40" alt="Flipper Zero" />
//           Guide
//         </Brand>
//         <StyledNav>
//           <StyledHamburgerMenu
//             isOpen={dropdownVisible}
//             onClick={() => setDropdownVisible(!dropdownVisible)}
//           />
//           <DropdownContent className={dropdownVisible ? 'show' : ''}>
//             <DropdownLink onClick={() => handleNavigate('/')}>
//               Home
//             </DropdownLink>
//             <DropdownLink onClick={() => handleNavigate('/guide/firmware')}>
//               Newbie Guide
//             </DropdownLink>
//             <DropdownLink onClick={() => handleNavigate('/about')}>
//               About
//             </DropdownLink>
//             <DropdownLink onClick={() => handleNavigate('/trustedSellers')}>
//               Trusted Sellers
//             </DropdownLink>
//             <DropdownLink onClick={() => handleNavigate('/repositoryList')}>
//               Useful Repositories
//             </DropdownLink>
//             <DropdownLink
//               onClick={() => handleNavigate('/terminalPage')}
//               style={{ display: 'none' }}
//             >
//               Terminal
//             </DropdownLink>
//           </DropdownContent>
//         </StyledNav>
//       </StyledContainer>
//     </StyledNavbar>

//   )
// }

// export default AppHeader



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '/logos/orange_text_transparent_white_1000px.png';
import { GiHamburgerMenu } from 'react-icons/gi';

// Adjusted StyledNavbar to remove unused CSS import and fix TypeScript errors
const StyledNavbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background-color: #ff8200;
  box-shadow: 10px 10px 28px rgba(0, 0, 0, 0.559);
  z-index: 1030;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Brand = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Text = styled.p`
  font-family: 'Born2bSportyV2', monospace;
  font-size: 30pt;
  color: white;
`;

const NavLink = styled.div` // Made use of NavLink
  font-family: 'Born2bSportyV2', sans-serif;
  font-size: 20pt;
  color: white;
  text-decoration: none;
  cursor: pointer;
  padding: 0 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
  top: 50px;

  &.show {
    display: block;
  }
`;

const DropdownLink = styled(NavLink)` // Inherits styles from NavLink
  color: black;
  padding: 12px 16px;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const StyledHamburgerMenu = styled(GiHamburgerMenu)`
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  padding: 10 20px; // Adjust padding to keep it away from the edge
  transition: transform 0.3s ease;
`;

const AppHeader: React.FC = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path: string) => { // Explicitly type 'path' parameter
    setDropdownVisible(false);
    navigate(path);
  };

  return (
    <StyledNavbar>
      <StyledContainer>
        <Brand onClick={() => handleNavigate('/')}>
          <img src={logo} height="40" alt="Flipper Zero" />
          <Text>Guide</Text>
        </Brand>
        <StyledNav onClick={() => setDropdownVisible(!dropdownVisible)}>
          <StyledHamburgerMenu />
          <DropdownContent className={dropdownVisible ? 'show' : ''}>
            <DropdownLink onClick={() => handleNavigate('/')}>Home</DropdownLink>
            <DropdownLink onClick={() => handleNavigate('/guide/firmware')}>Newbie Guide</DropdownLink>
            <DropdownLink onClick={() => handleNavigate('/about')}>About</DropdownLink>
            <DropdownLink onClick={() => handleNavigate('/trustedSellers')}>Trusted Sellers</DropdownLink>
            <DropdownLink onClick={() => handleNavigate('/terminalPage')} style={{ display: 'none' }}>Terminal</DropdownLink>
          </DropdownContent>
        </StyledNav>
      </StyledContainer>
    </StyledNavbar>
  );
};

export default AppHeader;
