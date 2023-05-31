import pgImage from "../../imgs/pg3.png";
import counter from "../../imgs/pg3.svg";
import { Banner } from "./style";
import { Buttons, Counter, Line, Tela, TelaDentro } from "../../style";

const Pg3 = () => {
  return (
    <Tela>
      <TelaDentro>
        <Banner>
          <img src={pgImage} alt="" />

          <h2>Buy & Sell Tools</h2>

          <p className="paragrafo">
            Buy & sell good quality products for your beautiful plants
          </p>
        </Banner>

        <Counter src={counter} alt="" />
        <Buttons>
          <button className="button">Get started</button>
        </Buttons>
        <Line />
      </TelaDentro>
    </Tela>
  );
};

export default Pg3;
