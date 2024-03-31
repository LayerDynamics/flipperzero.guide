// HomePage.tsx
import { Card } from 'react-bootstrap';


function TrustedSellers() {
  return (
    <Card className="text-center" style={{marginTop: '100px', color: '#000000', boxShadow: '10px 14px 28px rgba(0, 0, 0, 0.559)' }}>
      <Card.Body >
      <Card.Title> Welcome to the Trusted Retailers Page!</Card.Title>
				<ul>
				<li>
				<p>	<a href='https://www.justcallmekokollc.com/' target='_blank'>JustCallMeKoko</a> - Marauder</p>
				</li>
				</ul>
      </Card.Body>
    </Card>
  );
}
export default TrustedSellers;
