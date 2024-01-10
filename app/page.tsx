// ./app/pages/Home.tsx
import React from "react";
import Questions from "./pages/page";
import QuestionDetail from "./pages/question/[id]";

const Home = () => {
  return (
    <div>
      <Questions />
    <QuestionDetail/>
    </div>
  );
};

export default Home;
