// App.js or App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Guide from './pages/Guide';
import AppHeader from './components/AppHeader';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TrustedSellers from './pages/TrustedSellers';
import './styles/App.css';
import TerminalPage from './pages/TerminalPage';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <AppHeader />
      <Container style={{ marginTop: '10px', marginBottom: '100px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
					<Route path="/guide/*" element={<Guide />} />
          <Route path="/about" element={<About />} />
					<Route path="/trustedSellers" element={<TrustedSellers />}/>
					<Route path="/terminal" element={<TerminalPage />}/>
        </Routes>
      </Container>
			<Footer />
    </Router>
  );
}

export default App;
``
