import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage'; 
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<DashboardPage />} /> 
            <Route path="*" element={<LoginPage />} /> 
          </Routes>
        </Router>
      );
    }

    export default App;
    