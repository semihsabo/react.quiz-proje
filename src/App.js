import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './components/Quiz';
import Result from './pages/Result';
import './styles/App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}

export default App;