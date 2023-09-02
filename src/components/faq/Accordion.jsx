import "./Accordion.css";

const Accordion = ({ question, answer, num, curOpen, setCurOpen }) => {
  const isOpen = num === curOpen;

  const handleOpen = () => {
    setCurOpen(isOpen ? null : num);
  };
  return (
    <li
      className={`accordion ${isOpen ? "accordion_open" : ""}`}
      onClick={handleOpen}
    >
      <div className="accordion_qa">
        <p className="accordion_num">{num + 1}.</p>
        <p className="accordion_txt">{question}</p>
        <span className="accordion_icon">{isOpen ? "-" : "+"}</span>
      </div>

      {isOpen && <div className="accordion_ans">{answer}</div>}
    </li>
  );
};

export default Accordion;
