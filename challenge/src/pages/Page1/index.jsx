import pgImage from "../../imgs/pg1.png";
import counter from "../../imgs/pg1.svg";
import { Banner, Buttons, Counter, Line, Tela, TelaDentro } from "../../style";

// eslint-disable-next-line react/prop-types
function Pg({ changePage }) {
  return (
    <Tela>
      <TelaDentro>
        <Banner>
          <img src={pgImage} alt="" />

          <h2>Plant lover Community</h2>

          <p>Find gardening enthusiasts from all over the world</p>
        </Banner>

        <Counter src={counter} alt="" />

        <Buttons>
          <button onClick={() => changePage("pg2")}>Continue</button>

          <a onClick={() => changePage("pg3")}>Skip</a>
        </Buttons>
        <Line />
      </TelaDentro>
    </Tela>
  );
}

export default Pg;
