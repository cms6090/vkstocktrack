import styled from 'styled-components';

export const WrapNews = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
`;

export const Title = styled.div`
  h2 {
    line-height: 34px;
    font-size: ${(props) => props?.theme?.fontSize?.xxl};
    font-weight: ${(props) => props.theme.fontWeight.black};
  }

  p {
    color: #58667e;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.regular};
  }

  .schedule {
    display: flex;
    align-items: center;
    margin-top: 16px;

    p {
      margin-left: 8px;
      text-transform: uppercase;
      line-height: 24px;
      font-weight: ${(props) => props.theme.fontWeight.bold};
    }
  }
`;

export const NewItem = styled.div`
  padding: 32px 0px;
  a {
    display: flex;
    /* align-items: center; */

    .ant-image {
      padding: 0 16px;
      .ant-image-img {
        width: 300px;
        height: 100%;

        border-radius: 8px;
      }
    }
    @media ${(props) => props.theme.breakpoints.lgMax} {
      flex-direction: column;

      .time {
        padding-left: 16px;
      }

      .ant-image {
        .ant-image-img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .time {
    p {
      display: inline-block;
      white-space: nowrap;
      color: #58667e;
      font-size: ${(props) => props.theme.fontSize.md};
      font-weight: ${(props) => props.theme.fontWeight.semiBold};
    }
  }
`;

export const ItemContent = styled.div`
  padding: 0 16px;

  h3 {
    margin-top: 4px;
    margin-bottom: 4px;

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;

    line-height: 1.3;
    font-size: ${(props) => props.theme.fontSize.xxl};
    font-weight: ${(props) => props.theme.fontWeight.bold};
  }

  p {
    font-size: ${(props) => props.theme.fontSize.md};
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  span {
    display: inline-block;
    padding: 4px 10px;
    margin-top: 4px;

    line-height: 1;
    font-weight: ${(props) => props.theme.fontWeight.semiBold};

    border-radius: 16px;
    background: #eff2f5;
  }
`;
