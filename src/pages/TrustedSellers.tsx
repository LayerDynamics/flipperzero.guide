import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import '../styles/FontStyles';

// Styled component for the card
const StyledCard = styled(Card)`
  margin-top: 450px;
  color: #000000;
  box-shadow: 10px 14px 28px rgba(0, 0, 0, 0.559);
  justify-content: center;
`;

// Styled component for the card body
const CardBody = styled(Card.Body)`
  justify-content: center;
  margin: 10px;
`;

// Styled component for the title with GravityBold8 font
const Title = styled.h3`
  font-family: 'GravityBold8', sans-serif;
  text-decoration: underline;
	padding: 10px;
`;

// Styled component for the rest of the text with haxrcorp4089 font
const Text = styled.p`
  font-family: 'Born2bSportyV2', monospace;
	font-size: 24pt;
`;

// Styled component for links
const Link = styled.a`
  color: inherit; // Keeps the link color the same as the text color
`;

function TrustedSellers() {
  return (
    <StyledCard className="text-center">
      <CardBody>
        <Card.Title><Title>Trusted Retailers</Title></Card.Title>
        <Text><Link href='https://www.justcallmekokollc.com/' target='_blank'>JustCallMeKoko</Link></Text>
        <Text><Link href='https://www.rabbit-labs.com/' target='_blank'>Rabbit Labs</Link></Text>
        <Text><Link href='https://www.tindie.com/stores/sometoms/' target='_blank'>Rabbit Labs EU</Link></Text>
        <Text><Link href='https://www.awokdynamics.com/s/shop' target='_blank'>Awok</Link></Text>
        <Text><Link href='https://lab401.com/' target='_blank'>Lab401</Link></Text>
        <Text><Link href='https://www.etsy.com/shop/Rek5lab' target='_blank'>Rek5labs</Link></Text>
        <Text><Link href='https://www.tindie.com/stores/eried/' target='_blank'>Erwin ried</Link></Text>
        <Text><Link href='https://www.tindie.com/stores/ruckus/' target='_blank'>Section80</Link></Text>
        <Text><Link href='https://www.tindie.com/stores/sce/' target='_blank'>Sce</Link></Text>
        <Text><Link href='https://www.etsy.com/shop/MakeItHackin' target='_blank'>MakeitHackin</Link></Text>
      </CardBody>
    </StyledCard>
  );
}

export default TrustedSellers;
