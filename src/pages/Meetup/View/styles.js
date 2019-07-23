import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 900px;
  color: #fff;
  margin: 50px auto;

  img {
    object-fit: none;
    object-position: center;
    height: 300px;
    width: 900px;
    margin-top: 20px;
    border-radius: 4px;
    color: #666;
  }

  header {
    width: 100%;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: space-between;

    strong {
      font-size: 32px;
    }

    button {
      margin-left: 20px;
      padding: 12px 20px;
      height: 44px;
      background: #d44059;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.06, '#D44059')};
      }
    }

    button.edit {
      background: #4dbaf9;
      &:hover {
        background: ${darken(0.06, '#4DBAF9')};
      }
    }
  }

  span {
    width: 100%;
    text-align: left;
    font-size: 18px;
    margin-top: 20px;
  }

  > div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;

    span {
      font-size: 14px;
      color: #666;
    }
  }
`;
