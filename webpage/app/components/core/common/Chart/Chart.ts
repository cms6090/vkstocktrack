import styled, { css } from 'styled-components';

export const WrapPriceChart = styled.div`
  padding: 20px;
  border-radius: 16px;

  /* background-color: ${(props) =>
    props?.theme?.colors?.other?.background3}; */
  box-shadow: ${(props) => props?.theme?.shadow?.normalShadow};

  .g2-tooltip-title {
    font-weight: ${(props) => props?.theme?.fontWeight?.bold};
  }

  .g2-tooltip-list-item {
    .g2-tooltip-value {
      font-weight: ${(props) => props?.theme?.fontWeight?.bold};
    }
  }
`;

export const TrendlineHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h5 {
    line-height: 26px;
    font-size: ${(props) => props?.theme?.fontSize?.lg};
    font-weight: ${(props) => props?.theme?.fontWeight?.bold};
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  h5 {
    margin-right: 6px;
  }
`;

export const SelectTime = styled.span`
  display: flex;
  align-items: baseline;
  gap: 10px;
  justify-content: flex-end;

  img {
    cursor: pointer;
  }
`;

export const WrapDatePicker = styled.div<{ $isShow: boolean }>`
  width: 0%;
  transition: all 0.5s;
  overflow: hidden;

  ${({ $isShow }) =>
    $isShow &&
    css`
      width: 100%;
      transition: all 0.5s;
    `}
`;

export const Placeholder = styled.section`
  height: 260px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  .ant-skeleton-input {
    width: 100% !important;
  }
`;
