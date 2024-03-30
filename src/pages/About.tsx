import React from 'react';
import { Card } from 'react-bootstrap';
import { FaInfoCircle } from 'react-icons/fa';
import '../styles/About.css'; // Assuming this is the correct path

function About() {
  return (
    // Ensure the ID matches your CSS selector
    <Card className="text-center" id="aboutContainer">
      <Card.Body>
        <Card.Title>About This Project <FaInfoCircle /></Card.Title>
        <Card.Text>
          This site hopes to serve as a more comprehensive guide on how to actually use the flipper zero.
        </Card.Text>
        <Card.Text>
          It showcases the power of modern web development tools and libraries, aiming to provide a clear path for building scalable and maintainable web applications.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
