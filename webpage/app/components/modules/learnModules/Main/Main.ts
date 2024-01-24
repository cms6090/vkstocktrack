import styled from 'styled-components';

export const WrapLearnPage = styled.div``;

export const ListArticles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  max-width: 1100px;
  margin: 0 auto;
`;

export const WrapBanner = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  background: #00a16e;
`;

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  align-items: center;
  max-width: 1100px;
  padding: 24px 0;

  color: ${(props) => props?.theme?.colors?.other?.text5};
`;

export const LeftBanner = styled.div`
  h1 {
    font-size: 64px;
    margin-bottom: 16px;
    line-height: 1.1;
    font-weight: ${(props) => props?.theme?.fontWeight?.bold};
  }

  p {
    font-size: ${(props) => props?.theme?.fontSize?.lg};
  }
`;

export const ArticlesTitle = styled.h2`
  font-size: 32px;
  max-width: 1100px;
  margin: 0 auto 32px auto;
  font-weight: ${(props) => props?.theme?.fontWeight?.bold};
`;

export const RightBanner = styled.div``;

export const WrapPagination = styled.div`
  max-width: 1100px;
  margin: 48px auto;
  display: flex;
  justify-content: center;

  .ant-pagination {
    .ant-pagination-item-active {
      background-color: ${(props) =>
        props?.theme?.colors?.primaryColor} !important;
      border-color: ${(props) => props?.theme?.colors?.primaryColor} !important;

      a {
        color: ${(props) => props?.theme?.colors?.other?.text5};
      }
    }

    a {
      font-weight: ${(props) => props?.theme?.fontWeight?.bold};
    }
  }
`;
