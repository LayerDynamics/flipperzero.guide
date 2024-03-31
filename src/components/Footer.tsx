import styled from 'styled-components';
import { RiTwitterXFill } from "react-icons/ri";

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed; // Ensures the footer sticks to the bottom
  left: 0; // Aligns the footer to the left edge
  right: 0; // Aligns the footer to the right edge
  bottom: 0; // Ensures the footer stays at the bottom
  display: flex; // Using flex to center the content
  justify-content: center; // Centers content horizontally
  align-items: center; // Centers content vertically
`;

const FooterContent = styled.div`
  display: flex; // Ensures the icons and any content inside are flexibly organized
  justify-content: center; // Horizontally centers the content inside FooterContent
  align-items: center; // Vertically centers the content
  width: 100%; // Makes sure it takes the full width of its parent
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><RiTwitterXFill /></a>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
