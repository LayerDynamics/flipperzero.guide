// src/components/AdvancedTopicsNavigation.tsx
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledNav = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const StyledNavLink = styled(NavLink)`
  background-color: #FF8200;
  color: white;
  text-decoration: none;
  padding: 10px 15px;
  margin: 5px;
  border-radius: 5px;
  &:hover, &.active {
    background-color: #fb810f;
  }
`;

const AdvancedNavigation = () => {
  return (
    <StyledNav>
      <StyledNavLink to="/advanced/page1">Page1</StyledNavLink>
      <StyledNavLink to="/advanced/page2">Page2</StyledNavLink>
      <StyledNavLink to="/advanced/page3">Page3</StyledNavLink>
      {/* Add more links as needed */}
    </StyledNav>
  );
};

export default AdvancedNavigation;
