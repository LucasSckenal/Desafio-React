import pgImage from "../../imgs/pg2.png";
import counter from "../../imgs/pg2.svg";
import { Banner, Buttons, Counter, Line, Tela, TelaDentro } from "../../style";

// eslint-disable-next-line react/prop-types
const Pg2 = ({ changePage }) => {
  return (
    <Tela>
      <TelaDentro>
        <Banner>
          <img src={pgImage} alt="" />

          <h1 className="title">Get fast & safe delivery</h1>

          <p className="paragrafo">Get good quality products for your plants</p>
        </Banner>

        <Counter src={counter} alt="" />

        <Buttons>
          <button onClick={() => changePage("pg3")}>Continue</button>

          <a onClick={() => changePage("pg3")}>Skip</a>
        </Buttons>
        <Line />
      </TelaDentro>
    </Tela>
  );
};

export default Pg2;
