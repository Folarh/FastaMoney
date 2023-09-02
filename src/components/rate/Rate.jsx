import Ine from "../../assets/ine.png";
import Feather from "../../assets/feather.png";

//style
import "./Rate.css";

const Rate = () => {
  return (
    <section className="rate">
      <div className="rate_container">
        <div className="rate_result">
          <div className="rate_one">
            <img src={Feather} alt="circle check" />
            <div>
              <h2>HIGHEST SUCCESS RATES</h2>
              <p>
                Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin,
                lorem is simply free text quis bibendum.
              </p>
            </div>
          </div>

          <div className="rate_one">
            <img src={Feather} alt="circle check" />
            <div>
              <h2>HIGHEST SUCCESS RATES</h2>
              <p>
                Lorem Ipsum nibh vel velit auctor aliqu. Aenean sollic tudin,
                lorem is simply free text quis bibendum.
              </p>
            </div>
          </div>
        </div>

        <div className="rate_info">
          <p className="rate_text">
            There are many variations of passages of lorem ipsum available, but
            the majority have suffered alteration in some form injected humour
            or randomised words which dont look believable.
          </p>

          <div className="rate_next">
            <img src={Ine} alt="line" />
            <span>If you are going to use a passage</span>
          </div>

          <div className="rate_next">
            <img src={Ine} alt="short line icon" />
            <span>If you are going to use a passage</span>
          </div>

          <div className="rate_next">
            <img src={Ine} alt="short line icon" />
            <span>If you are going to use a passage</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rate;
