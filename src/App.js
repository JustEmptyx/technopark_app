import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './router.js';
import './styles/global.css';

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;