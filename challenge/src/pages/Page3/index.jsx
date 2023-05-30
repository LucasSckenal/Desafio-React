import pgImage from "../../imgs/pg3.png";
import counter from "../../imgs/pg3.svg";
import { Tela } from "./style";


const Pg3 = () => {
  return (
    <Tela>
      <section className="Tela-dentro">
    <div className="imgContainer">
      <img src={pgImage} alt="" />
     </div>

     <h1 className="title">
      Buy & Sell Tools
     </h1>

     <p className="paragrafo">
      Buy & sell good quality products for your beautiful plants
     </p>

     <div className="counter">
     <img src={counter} alt="" />
     </div>

     <button className="button">Get started</button>

      <div className="black">
      </div>
    </section>  
  </Tela>
  )
}

export default Pg3