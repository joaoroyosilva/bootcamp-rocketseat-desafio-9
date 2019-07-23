import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  color: #fff;

  header {
    max-width: 900px;
    margin: 30px auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > strong {
      font-size: 32px;
    }
  }

  button {
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

  ul {
    max-width: 900px;
    margin: 30px auto;
    width: 100%;
  }

  a {
    color: #fff;
  }
`;

export const Meetup = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  padding: 16px;
  border-radius: 4px;

  margin-top: 10px;

  strong {
    font-size: 18px;
  }

  span {
    font-size: 16px;
    color: #666;
  }
`;
