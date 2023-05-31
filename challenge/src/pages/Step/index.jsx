import pgImage from "../../imgs/pg1.png";
import counter from "../../imgs/pg1.svg";
import {
  Banner,
  Buttons,
  BlackBar,
  Counter,
  TelaDentro,
  Tela,
} from "../../style";

const Step = () => {
  return (
    <Tela>
      <TelaDentro>
        <Banner>
          <img src={pgImage} alt="" />

          <h2 className="title">Plant lover Community</h2>

          <p className="paragrafo">
            Find gardening enthusiasts from all over the world
          </p>
        </Banner>

        <Counter src={counter} alt="" />
        <Buttons>
          <button>Continue</button>

          <a>Skip</a>
        </Buttons>
        <BlackBar></BlackBar>
      </TelaDentro>
    </Tela>
  );
};

export default Step;
