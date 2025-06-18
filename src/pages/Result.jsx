import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="result">
      <h1>Sonuç</h1>
      <p>Doğru Sayısı: {state.score} / {state.total}</p>
      <button onClick={() => navigate('/')}>Yeniden Başla</button>
    </div>
  );
};

export default Result;