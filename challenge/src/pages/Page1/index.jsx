import { Link } from "react-router-dom";
import pgImage from "../../imgs/pg1.png";
import counter from "../../imgs/pg1.svg";
import { Tela } from "./style";

const Pg = () => {
  return (
    <Tela>
      <section className="Tela-dentro">
        <div className="imgContainer">
          <img src={pgImage} alt="" />
        </div>

        <h1 className="title">
          Plant lover Community
        </h1>

        <p className="paragrafo">
          Find gardening enthusiasts from all over the world
        </p>

        <div className="counter">
          <img src={counter} alt="" />
        </div>

        <button className="button">
          <Link to="/page2">Continue</Link>
        </button>

        <a className="skip">
          <Link to="/page3">Skip</Link>
        </a>

        <div className="black"></div>
      </section>
    </Tela>
  );
};

export default Pg;
