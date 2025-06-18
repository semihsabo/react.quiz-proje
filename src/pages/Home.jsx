import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Quiz Uygulamasına Hoş Geldiniz</h1>
      <button onClick={() => navigate('/quiz')}>Başla</button>
    </div>
  );
};

export default Home;