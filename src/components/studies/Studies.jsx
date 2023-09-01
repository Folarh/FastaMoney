//component
import StudyCard from "./StudyCard";

//assets
import Motor from "../../assets/motor.png";

//style
import "./Studies.css";

const Studies = () => {
  return (
    <section className="studies">
      <div className="studies_container">
        <div className="studies_info">
          <h1>NEW CASE STUDIES</h1>
          <p>We help our clients renew their business</p>
        </div>

        <div className="studies_card">
          <StudyCard className="studies_box">
            <img src={Motor} alt="car" />
            <p>Thought leadership</p>
            <h3>
              businesses <br /> growth
            </h3>
          </StudyCard>

          <StudyCard className="studies_box">
            <img src={Motor} alt="car" />
            <p>Thought leadership</p>
            <h3>
              businesses <br /> growth
            </h3>
          </StudyCard>

          <StudyCard className="studies_box">
            <img src={Motor} alt="car" />
            <p>Thought leadership</p>
            <h3>
              businesses <br /> growth
            </h3>
          </StudyCard>
        </div>
      </div>
    </section>
  );
};

export default Studies;
