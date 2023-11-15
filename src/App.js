import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage'; // Adjust the import path based on your folder structure
import SignUpPage from './pages/SignUpPage/SignUpPage';
import AnalyticsDashboard from './pages/AnalyticsPage/AnalyticsDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* ... other routes ... */}
      </Routes>
    </Router>
  );
}

export default App;