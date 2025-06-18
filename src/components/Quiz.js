import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import Question from './Question';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (correct) => {
    if (correct) setScore(score + 1);
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
    } else {
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  return (
    <div className="quiz">
      <Question data={questions[currentIndex]} onAnswer={handleAnswer} />
    </div>
  );
};

export default Quiz;