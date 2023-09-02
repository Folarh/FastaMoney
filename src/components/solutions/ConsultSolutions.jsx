import ConsultSolutionsCard from "./ConsultSolutionsCard";
import BusinessGrowth from "./BusinessGrowth";

//assets
import Line from "../../assets/Line.png";

//style
import "./ConsultSolutions.css";

const ConsultSolutions = () => {
  return (
    <>
      <div className="hey">
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

        <div className="look">
          <div className="business_top">
            <BusinessGrowth className="business_growth">
              <span>BUSINESS GROWTH</span>
            </BusinessGrowth>

            <BusinessGrowth className="business_growth">
              <span>BUSINESS GROWTH</span>
            </BusinessGrowth>

            <BusinessGrowth className="business_growth">
              <span>BUSINESS GROWTH</span>
            </BusinessGrowth>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConsultSolutions;
