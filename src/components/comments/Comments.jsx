import CommentsCard from "./CommentsCard";

//assets
import Previous from "../../assets/prev.png";
import Next from "../../assets/next.png";

//style
import "./Comments.css";

const Comments = () => {
  return (
    <section className="comments">
      <div className="comments_info">
        <h2>WHAT THEY ARE TALKING ABOUT?</h2>
        <p>Trusted by more than 4,200 customers</p>
        <div className="comments_direction">
          <img src={Previous} alt="prev" />
          <img src={Next} alt="next" />
        </div>
      </div>

      <CommentsCard className="comments_card">
        <p>
          Lorem ipsum is simply free text dolor sit amet, consectetur notted
          adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum is simply free text dolor sit
          amet,consectetur notted adipisicing elit sed do eiusmod tempor
        </p>

        <p className="comments_name">Todd Higgins</p>
        <span className="comments_title">Customer</span>
      </CommentsCard>

      <CommentsCard className="comments_card">
        <p>
          Lorem ipsum is simply free text dolor sit amet, consectetur notted
          adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.Lorem ipsum is simply free text dolor sit
          amet,consectetur notted adipisicing elit sed do eiusmod tempor
        </p>

        <p className="comments_name">Todd Higgins</p>
        <span className="comments_title">Customer</span>
      </CommentsCard>
    </section>
  );
};

export default Comments;
