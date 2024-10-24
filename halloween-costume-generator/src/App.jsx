import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Link hinzugefügt
import { Nav } from 'react-bootstrap';
import Slider from './components/Slider';
import HalloweenHistory from './components/HalloweenHistory';
import HalloweenName from './components/HalloweenName';
import HalloweenRecipe from './components/Halloweenrecipe';  // Korrigiere den Importnamen
import './index.css';
import Zurueck from './components/Zurueck';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Halloween Kostüm Generator</h1>

          <Nav variant="underline" defaultActiveKey="/">
            <Nav.Item>
              <Nav.Link as={Link} to="/">Kostüm-Generator</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/history">Halloween-Geschichte</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/halloween-name">Halloween-Name</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/recipes">Rezepte</Nav.Link>
            </Nav.Item>
          </Nav>
        </header>

        <Routes>
          <Route path="/" element={<Slider />} />
          <Route path="/history" element={<HalloweenHistory />} />
          <Route path="/halloween-name" element={<HalloweenName />} />
          <Route path="/recipes" element={<HalloweenRecipe />} />
        </Routes>
      </div>
    </Router>
  );
}





export default App;
