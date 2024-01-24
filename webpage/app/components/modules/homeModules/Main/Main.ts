import styled from 'styled-components';

export const WrapHomePage = styled.div`
  padding: 20px;
`;

export const HomeTop = styled.div`
  h3 {
    color: #38477f;
    font-size: 32px;
    font-weight: ${(props) => props.theme.fontWeight?.bold};
  }

  p {
    max-width: 60%;
    line-height: 26px;
    word-spacing: 1.5px;
    color: #58667e;
    font-size: ${(props) => props.theme.fontSize.lg};
    font-weight: ${(props) => props.theme.fontWeight?.regular};
  }
`;

export const HomeStocks = styled.div`
  margin-top: 32px;

  h4 {
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: ${(props) => props.theme.fontWeight?.bold};
  }

  .list-name {
    display: flex;

    .item {
      width: 8.75%;
      display: flex;
      align-items: start;
      justify-content: end;
      gap: 4px;
      padding: 10px;
      border-top: 1px solid #eff2f5;
      border-bottom: 1px solid #eff2f5;
      font-size: ${(props) => props.theme.fontSize.base};
      font-weight: ${(props) => props.theme.fontWeight?.bold};

      p {
        display: flex;
        align-items: start;
        justify-content: end;
        flex: 1;
      }
    }

    :first-child {
      width: 30%;
      justify-content: start;

      img {
        display: none;
      }

      p {
        justify-content: start;
      }
    }
  }
`;
