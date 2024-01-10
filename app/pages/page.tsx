
import React from "react";
import Link from 'next/link';

const Questions = () => {
  const questions = [
    { id: 1, text: "Quelle est flutter ?" },
    { id: 2, text: "Quel est php ?" },
    { id: 3, text: "Quelle est Symphony ?" },
  ];

  return (
    <div className="list-group d-flex justify-content-center align-items-center vh-100">
      <div className="text-center w-75 h-75" style={{ marginTop: "10%" }}>
        <h2 className="list-group-item list-group-item-action active">
          Questions
        </h2>
        <ul className="list-group">
          {questions.map((question) => (
            <li key={question.id} className="list-group-item list-group-item-action">
              <Link href={`/question/${question.id}`} key={question.id}>
                {question.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Questions;
