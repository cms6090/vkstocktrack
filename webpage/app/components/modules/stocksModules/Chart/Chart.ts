import styled from 'styled-components';

export const ChartWrap = styled.section`
  .title {
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: ${(props) => props.theme.fontWeight.bold};

    .name {
      color: ${(props) => props.theme.colors.primaryColor};
      margin-right: 14px;
    }

    .symbol {
      color: #616e85;
    }
  }

  .description {
    margin-bottom: 20px;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }
`;
