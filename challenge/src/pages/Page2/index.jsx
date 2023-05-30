import { Link } from "react-router-dom";
import pgImage from "../../imgs/pg2.png";
import counter from "../../imgs/pg2.svg";
import { Tela } from "./style";


const Pg2 = () => {
  return (
    <Tela>
      <section className="Tela-dentro">
    <div className="imgContainer">
      <img src={pgImage} alt="" />
     </div>

     <h1 className="title">
      Get fast & safe delivery
     </h1>

     <p className="paragrafo">
      Get good quality products for your plants 
     </p>

     <div className="counter">
     <img src={counter} alt="" />
     </div>

     <button className="button">
          <Link to="/page3">Continue</Link>
        </button>

        <a className="skip">
          <Link to="/page3">Skip</Link>
        </a>

      <div className="black"></div>

    </section>  
  </Tela>
  )
}

export default Pg2