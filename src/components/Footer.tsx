import styled from 'styled-components';
import { RiTwitterXFill } from "react-icons/ri";

const FooterContainer = styled.footer`
  background-color: #222;
  color: #fff;
  text-align: center;
  padding: 20px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  p {
    margin: 0;
    padding: 0;
  }
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
