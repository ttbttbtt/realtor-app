import styled from "styled-components";

export const Container = styled.div`
  padding: 0 calc(12vw - 35px); //? 1920 - 195 | 375 - 10
  margin-top: calc(4.4vw + 62px); //? 146 - 1920 | 85 - 530

  h1 {
    margin-bottom: 10px;
  }

  .nav {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 25px;

    a {
      /* text-decoration: underline;  */
      color: blueviolet;
    }
  }

  .updLikes {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 25px;
  }

  button {
    cursor: pointer;
    padding: 12px 15px;
    font-size: inherit;
    border-radius: 10px;

    border: 1px solid transparent;
    outline: 0;
    font-family: inherit;

    /* color: blueviolet;   // white */
    /* transition: 200ms; */
    /* width: 100%; */
    margin-bottom: 10px;
  }
`;
