import styled from "styled-components";

export const Tela = styled.section`
  position: absolute;
  width: 405px;
  height: 842px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background: #f5f2f2;

  border-radius: 50px;
`;

export const TelaDentro = styled.section`
  position: absolute;
  width: 375px;
  height: 812px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #f3f5f7;
  box-shadow: 40px 60px 80px rgba(31, 26, 26, 0.15);
  border-radius: 40px;
`;

export const Banner = styled.section`
  height: 420px;
  width: 304px;

  img {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 40px;
    top: 34px;
  }
  h2 {
    position: absolute;
    width: 282px;
    height: 31px;
    left: 50px;
    top: 341px;

    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 128.91%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }

  p {
    position: absolute;
    width: 299px;
    height: 46px;
    left: 37px;
    top: 398px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 128.91%;

    display: flex;
    align-items: center;
    text-align: center;

    color: #000000;
  }
`;

export const Counter = styled.img`
  position: absolute;
  width: 70px;
  height: 12px;
  left: 144px;
  top: 508px;
`;

export const Buttons = styled.section`
  width: 308px;
  height: 116px;

  button {
    position: absolute;
    width: 308px;
    height: 54px;
    left: 35px;
    top: 583px;

    background: #92e3a9;
    box-shadow: 0px 4px 10px #a1c3fc;
  }
  a {
    position: absolute;
    width: 38px;
    height: 23px;
    left: 171px;
    top: 679px;

    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 128.91%;
    /* or 23px */

    display: flex;
    align-items: center;
    text-align: center;

    color: #92e3a9;
  }
`;

export const Line = styled.div`
  position: absolute;
  width: 135px;
  height: 5px;
  left: 124px;
  top: 795px;

  background: #000000;
  border-radius: 4px;
`;
