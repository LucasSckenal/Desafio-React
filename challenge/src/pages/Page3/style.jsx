import styled from "styled-components";

export const Tela = styled.section`
  position: absolute;
  width: 405px;
  height: 842px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  background:#F5F2F2;
  
  border-radius: 50px;
  
  .Tela-dentro{
  position: absolute;
  width: 375px;
  height: 812px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #F3F5F7;
  box-shadow: 40px 60px 80px rgba(31, 26, 26, 0.15);
  border-radius: 40px;
  }

  .imgContainer {
    position: absolute;
    width: 300px;
    height: 300px;
    left: 40px;
    top: 34px;
  }

  .title{
   position: absolute;
   width: 282px;
   height: 31px;
   left: 98px;
   top: 341px;

   font-weight: 600;
   font-size: 24px;
   line-height: 128.91%;

   display: flex;
   align-items: center;
   text-align: center;

   color: #000000;
    }

 .paragrafo{
  position: absolute;
  width: 299px;
  height: 46px;
  left: 38px;
  top: 398px;

  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 128.91%;


  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
  }

  .counter{
   position: absolute;
   width: 70px;
   height: 12px;
   left: 144px;
   top: 508px;
  }

  .button{
   position: absolute;
   width: 308px;
   height: 54px;
   left: 35px;
   top: 583px;

   background: #92E3A9;
   box-shadow: 0px 4px 10px #A1C3FC;
  }

  .black{
   position: absolute;
   width: 135px;
   height: 5px;
   left: 124px;
   top: 795px;

   background: #000000;
   border-radius: 4px;
  }
`;