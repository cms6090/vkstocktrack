import styled from 'styled-components';

export const WrapStockItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  border-bottom: 1px solid #eff2f5;
  font-weight: ${(props) => props.theme.fontWeight?.semiBold};

  &:hover {
    background: #eff2f5;
  }

  .name-stock {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: ${(props) => props.theme.fontWeight?.bold};

    p {
      color: #808a9d;
    }
  }

  .detail-info {
    display: flex;
    align-items: center;
    width: 70%;

    .item {
      width: 12.5%;
      display: flex;
      align-items: center;
      justify-content: end;
      padding: 10px;
    }
  }
`;
