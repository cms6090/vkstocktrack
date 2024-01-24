import styled from 'styled-components';

export const WrapDayPrice = styled.div`
  padding: 10px;
`;

export const DayPriceTop = styled.div`
  .name {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 5px 10px;

    p {
      font-size: ${(props) => props.theme.fontSize.lg};
      font-weight: ${(props) => props.theme.fontWeight?.bold};
    }

    span {
      color: #616e85;
    }
  }

  h3 {
    font-size: 40px;
    font-weight: ${(props) => props.theme.fontWeight?.bold};
    padding: 5px 10px;
  }
`;

export const DayPriceBody = styled.div`
  .info-item {
    padding: 10px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: ${(props) => props.theme.fontWeight?.semiBold};

    .info-left {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #616e85;
    }
  }
`;
