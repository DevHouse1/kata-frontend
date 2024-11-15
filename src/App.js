import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
//import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';
import GlobalProvider from './contexts/GlobalContext';
import GlobalStyles from './styles/GlobalStyle';
import CommandList from './pages/CommandList';
//import CommandStatus from './pages/CommandStatus';

function App() {
  return (
    <GlobalProvider>
     <GlobalStyles />
      <Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/commands">Mes Commandes</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commands" element={<CommandList />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
