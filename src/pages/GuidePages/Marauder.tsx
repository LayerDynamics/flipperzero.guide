import React from 'react';
import { Card } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import '../../styles/index.css';
function Marauder() {
	return(
		<Card className="text-center" style={{marginTop: '100px', color: '#ff8200', boxShadow: '10px 14px 28px rgba(0, 0, 0, 0.559)' }}>
		<Card.Body>
		  Welcome to the Marauder Page! <FaReact />
		</Card.Body>
	  </Card>
	)
  }

export default Marauder;
