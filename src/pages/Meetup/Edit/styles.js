import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  input {
    height: 50px;
    width: 100%;
    border: 0px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    display: block;
    margin-top: 20px;
    font-size: 18px;
    padding: 20px;
    color: #fff;
  }

  textarea {
    width: 100%;
    border: 0px;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    display: block;
    margin-top: 20px;
    font-size: 18px;
    padding: 20px;
    color: #fff;
    resize: none;
  }

  > div {
    width: 100%;
    text-align: right;
  }

  button.button {
    margin: 20px auto;
    padding: 15px;
    background: #f94d6a;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#f94d6a')};
    }
  }
`;
