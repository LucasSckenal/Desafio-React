import pgImage from "../../imgs/pg2.png";
import counter from "../../imgs/pg2.svg";
import { Banner, Buttons, Black, Counter, Tela, TelaDentro } from "../../style";

const Step2 = () => {
  return (
    <Tela>
      <TelaDentro>
        <Banner>
          <div>
            <img src={pgImage} alt="" />
          </div>

          <h1>Get fast & safe delivery</h1>

          <p>Get good quality products for your plants</p>
        </Banner>
        <Counter src={counter} />
        <Buttons>
          <button>Continue</button>

          <a>Skip</a>
        </Buttons>
        <Black>
          <div></div>
        </Black>
      </TelaDentro>
    </Tela>
  );
};

export default Step2;
