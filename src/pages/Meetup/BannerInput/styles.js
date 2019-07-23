import styled from 'styled-components';

export const Container = styled.div`
  height: 300px;
  background: rgba(0, 0, 0, 0.5);
  label {
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      height: 300px;
      width: 900px;
      border-radius: 4px;
      border: 3px solid rgba(255, 255, 255, 0.3);
    }

    > input {
      display: none;
    }
  }
`;
