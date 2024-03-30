// HomePage.tsx
import React from 'react';
import { Card } from 'react-bootstrap';
import { FaReact } from 'react-icons/fa';
import Terminal from '../components/Terminal'
import '../styles/index.css';
function TerminalPage() {
  return (
    <Card className="text-center" id={Home} style={{marginTop: '100px', width: '600px', color: '#ff8200', boxShadow: '10px 14px 28px rgba(0, 0, 0, 0.559)' }}>
      <Card.Body>
        <Terminal />
      </Card.Body>
    </Card>
  );
}
export default TerminalPage;
