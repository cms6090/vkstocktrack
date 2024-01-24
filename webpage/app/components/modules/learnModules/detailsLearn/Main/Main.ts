import styled from 'styled-components';

export const WrapDetailsLearn = styled.div`
  .progress-bar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px; /* Adjust the height of your progress bar */
    background-color: #e0e0e0; /* Set the background color */
  }

  .progress-bar-container__progress {
    height: 100%;
    width: 0;
    background-color: ${(props) => props?.theme?.colors?.primaryColor};
  }
`;
export const TopDetails = styled.div`
  max-width: 750px;
  margin: 48px auto 0 auto;

  .type {
    line-height: 1.45;
    color: ${(props) => props?.theme?.colors?.primaryColor};
    font-size: ${(props) => props?.theme?.fontSize?.md};
  }

  h2 {
    font-size: 32px;
    margin-bottom: 32px;
    line-height: 1.3;
    font-weight: ${(props) => props?.theme?.fontWeight.bold};
  }

  .author {
    display: flex;
    align-items: center;
    color: rgb(118, 128, 143);
    line-height: 1.45;
    font-weight: ${(props) => props?.theme?.fontWeight.semiBold};
    font-size: ${(props) => props?.theme?.fontSize?.md};
    margin-bottom: 48px;

    :first-child {
      margin-right: 24px;
    }

    img {
      margin-right: 2px !important;
    }

    span {
      display: flex;
      align-items: center;
    }
  }
`;
export const Image = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;

  border-radius: 16px;
  background-color: #72a19c;

  .ant-image {
    width: 100%;
    height: 400px !important;

    .ant-image-img {
      border-radius: 16px;
      height: 400px !important;
    }
  }
`;
export const Content = styled.div`
  max-width: 750px;
  margin: 0 auto;

  h3 {
    font-size: 32px;
    margin-bottom: 32px;
    line-height: 1.3;
    font-weight: ${(props) => props?.theme?.fontWeight.semiBold};
  }

  h6 {
    font-size: 24px;
    margin-bottom: 24px;
    line-height: 1.3;
    font-weight: ${(props) => props?.theme?.fontWeight.semiBold};
  }

  p {
    font-size: 18px;
    margin-bottom: 32px;
    line-height: 1.6;
  }
`;
export const Table = styled.div`
  padding: 32px;
  border-radius: 32px;
  background-color: rgb(248, 250, 253);
  margin-bottom: 56px;

  h4 {
    line-height: 1.45;
    font-weight: ${(props) => props?.theme?.fontWeight.bold};
    font-size: ${(props) => props?.theme?.fontSize?.xxl};
  }

  ul {
    margin-left: 18px;
  }

  a {
    color: ${(props) => props?.theme?.colors?.primaryColor};
    font-weight: ${(props) => props?.theme?.fontWeight.semiBold};
    font-size: ${(props) => props?.theme?.fontSize?.md};
  }
`;

export const BottomDetails = styled.div``;

export const RelatedArticles = styled.div`
  padding: 40px 0;
  background: #f8fafd;

  .related-title {
    max-width: 1100px;
    margin: 0 auto;
    padding: 24px 0;
    line-height: 1.45;
    font-size: 32px;
    font-weight: ${(props) => props?.theme?.fontWeight.bold};
  }
`;

export const RelatedArticlesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;

  max-width: 1100px;
  margin: 0 auto;
`;
