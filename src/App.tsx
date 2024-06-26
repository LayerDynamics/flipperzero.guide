import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Guide from './pages/Guide';
import Advanced from './pages/Advanced';
import AppHeader from './components/AppHeader';
import TrustedSellers from './pages/TrustedSellers';
import TerminalPage from './pages/TerminalPage';
import Footer from './components/Footer';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import RepositoryList from './pages/RepositoryList';


const AppContainer = styled.div`
  max-width: 1280px;
  width: 100%; // Ensure it takes the full width
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center; // Center align the direct children horizontally
  justify-content: center; // Center align the direct children vertically
  flex-grow: 1; // Allow it to expand
`;




function App() {
  return (
    <Router>
      <AppContainer>
        <AppHeader />
        <Container style={{ marginTop: '10px', marginBottom: '100px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guide/*" element={<Guide />} />
						<Route path="/advanced/*" element={<Advanced />} />
            <Route path="/trustedSellers" element={<TrustedSellers />} />
            <Route path="/terminal" element={<TerminalPage />} />
						<Route path="/repositoryList" element={<RepositoryList />}/>
          </Routes>
        </Container>
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
