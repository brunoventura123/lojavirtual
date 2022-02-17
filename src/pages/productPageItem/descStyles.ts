import styled from "styled-components";

export const Container = styled.div`
    width:100%;
  
  .question-answer__accordion > .answer {
    display: block;
  }
  
  .active > .answer {
    display: block;
    padding-bottom: 1.3rem;
    color: darckblue;
  }
  
  .active i {
    transform: rotate(180deg);
    transition: all 0.3s ease-in;
  }
  
  .accordion__wrapper {
    margin-top: 65px;
  
    display: flex;
    flex-direction: column;
  }
  
  .questions__accordions {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .question-answer__accordion {
    width: 100%;
    border-bottom: 1px solid #e8e8ea;
  }
  
  .question {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    transition: 0.4s;
  }
  
  .active h3 {
    font-weight: 700;
  }
  
  .question i {
    align-self: center;
  }
  
  .image__wrapper {
    position: relative;
  }
  
  .image__wrapper_inner {
    background: url(/images/illustration-woman-online-desktop.svg);
    height: 100%;
    background-repeat: no-repeat;
    background-position: 120% center;
  }
  
  .box {
    position: absolute;
    top: 42%;
    left: -25%;
  }
  
  @media (max-width: 700px) {
    .wrapper {
      width: 350px;
      grid-template-columns: 1fr;
      grid-template-rows: 100px 1fr;
      grid-gap: 0.5rem;
      position: relative;
      padding: 1rem;
      height: 530px;
    }
    .image__wrapper {
      background: url("./images/bg-pattern-mobile.svg");
      background-repeat: no-repeat;
      background-position: center 590%;
    }
  
    .image__wrapper_inner {
      position: absolute;
      width: 100%;
      height: 200px;
      background-size: 72%;
      background-position: center;
      top: -129%;
    }
    .box {
      width: 55px;
      left: 19%;
      top: -30%;
    }
    .accordion__wrapper {
      margin-top: 0px;
    }
    .question-answer__accordion {
      width: 100%;
    }
    .title__accordion {
      text-align: center;
    }
  }
  
`