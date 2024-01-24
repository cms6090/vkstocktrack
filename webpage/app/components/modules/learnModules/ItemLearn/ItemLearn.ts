import styled from 'styled-components';

export const WrapItemLearn = styled.div`
  a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
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

    .ant-image-img {
      border-radius: 16px;
    }
  }
`;
export const Content = styled.div`
  margin-bottom: 24px;
  flex: 1;

  span {
    color: ${(props) => props?.theme?.colors?.primaryColor};
    font-size: ${(props) => props?.theme?.fontSize?.md};
    line-height: 1.5;
    padding-bottom: 4px;
  }

  h3 {
    margin-bottom: 8px;

    font-size: ${(props) => props?.theme?.fontSize?.xl};
    font-weight: ${(props) => props?.theme?.fontWeight.bold};
    line-height: 28px;
  }

  p {
    color: rgb(118, 128, 143);
    line-height: 1.45;
    font-size: ${(props) => props?.theme?.fontSize?.md};

    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;
export const Bottom = styled.div`
  display: flex;
  align-items: center;
  color: rgb(118, 128, 143);
  font-weight: ${(props) => props?.theme?.fontWeight.semiBold};
  margin-bottom: 24px;

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
`;
