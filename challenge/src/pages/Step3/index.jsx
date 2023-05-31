import pgImage from "../../imgs/pg3.png";
import counter from "../../imgs/pg3.svg";
import { Title } from "./style";
import { Banner, Black, Buttons, Counter, Tela, TelaDentro } from "../../style";

const Step3 = () => {
  return (
    <Tela>
      <TelaDentro>
        <section>
          <Banner>
            <div>
              <img src={pgImage} alt="" />
            </div>
            <Title>
              <h2>Buy & Sell Tools</h2>
            </Title>
            <p>Buy & sell good quality products for your beautiful plants</p>
          </Banner>

          <Counter>
            <img src={counter} alt="" />
          </Counter>
          <Buttons>
            <button>Get started</button>
          </Buttons>
          <Black>
            <div></div>
          </Black>
        </section>
      </TelaDentro>
    </Tela>
  );
};

export default Step3;
