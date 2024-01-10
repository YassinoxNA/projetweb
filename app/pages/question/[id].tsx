'use client';
import { useRouter } from 'next/router';


const QuestionDetail = () => {
  const router = useRouter(); // Utilisation de useRouter pour accéder au router

  const { id } = router.query; 

  const questions = [
    { id: 1, text: "Quelle est flutter ?" },
    { id: 2, text: "Quel est php ?" },
    { id: 3, text: "Quelle est Symphony ?" },
  ];

  const question = questions.find(q => String(q.id) === String(id));

  const handleSend = () => {
    // Ajoutez ici la logique pour envoyer la réponse ou traiter la question
    console.log('Question ID:', id);
    // Ajoutez ici la logique d'envoi de la réponse
  };

  return (
    <div className="text-center">
      <h2>{question ? question.text : "Question non trouvée"}</h2>
      <textarea ></textarea>
      <br />
      <button onClick={handleSend}>Envoyer</button>
    </div>
  );
};

export default QuestionDetail;
