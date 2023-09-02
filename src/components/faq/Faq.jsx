import { useState } from "react";
import Accordion from "./Accordion";

//Assets
import Mark from "../../assets/mark.png";

import "./Faq.css";

const data = [
  {
    id: 1,
    Question: "THINK AHEAD AND BOOST YOUR BUSINESS?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },

  {
    id: 2,
    Question: "HOW CONSULTANCY EXPERTS WORK?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },

  {
    id: 3,
    Question: "WHAT IS THE BEST ADVICE FOR GROWTH?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },

  {
    id: 4,
    Question: "HOW TO IMPROVE YOUR BUSINESS?",
    Answer:
      "There are many variations of passages the majority have suffered alteration in some for injected humour.",
  },
];

const article = [
  { text: "Nsectetur cing elit." },
  { text: "Suspe ndisse suscipit sagittis leo." },
  { text: "Entum estibulum dignissim posuere." },
  { text: "If you are going to use a passage" },
  { text: "If you are going to use a passage test data." },
];

const Faq = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="faq">
      <div className="faq_container">
        <div className="faq_intro">
          <h1>QUESTION ANSWERS</h1>
          <p>We help our clients renew their business</p>
        </div>

        <div className="faq_question">
          <ul className="faq_accordion">
            {data.length > 0 &&
              data.map((faq, index) => (
                <Accordion
                  key={faq.id}
                  question={faq.Question}
                  answer={faq.Answer}
                  num={index}
                  curOpen={curOpen}
                  setCurOpen={setCurOpen}
                />
              ))}
          </ul>

          <ul className="faq_info">
            {article.length > 0 &&
              article.map((el, index) => (
                <li key={index}>
                  <img src={Mark} alt="mark" />
                  <span>{el.text}</span>
                </li>
              ))}
          </ul>

          <div className="faq_exp">
            <p className="faq_years">30</p>
            <p className="faq_text">
              Years of <br /> Expeirence
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
