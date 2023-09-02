import ConsultSolutionsCard from "./ConsultSolutionsCard";

//assets
import Line from "../../assets/Line.png";

//style
import "./ConsultSolutions.css";

const ConsultSolutions = () => {
  return (
    <div className="consult_solutions">
      <ConsultSolutionsCard />
      <img className="image" src={Line} alt="line" />

      <ConsultSolutionsCard />
      <img className="image" src={Line} alt="line" />

      <ConsultSolutionsCard />
      <img className="image" src={Line} alt="line" />

      <ConsultSolutionsCard />
      <img className="image" src={Line} alt="line" />
    </div>
  );
};

export default ConsultSolutions;
