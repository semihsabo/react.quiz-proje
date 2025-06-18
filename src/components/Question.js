import React from 'react';

const Question = ({ data, onAnswer }) => {
  return (
    <div className="question">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((opt, i) => (
          <button key={i} onClick={() => onAnswer(opt === data.answer)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;