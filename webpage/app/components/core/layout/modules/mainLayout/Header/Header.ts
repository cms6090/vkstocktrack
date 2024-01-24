import styled from 'styled-components';

export const WrapHeader = styled.header`
  height: 60px;

  position: sticky;
  left: 0;
  right: 0;
  z-index: 100;

  border: 1px solid #eaedf0;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const Menu = styled.nav`
  a {
    padding: 10px 20px;
    margin: 4px;

    font-size: ${(props) => props?.theme?.fontSize.lg};
    color: ${(props) => props?.theme?.colors?.secondaryColor};
    font-weight: ${(props) => props?.theme?.fontWeight?.semiBold};
  }

  .active {
    color: ${(props) => props?.theme?.colors?.primaryColor};
    font-weight: ${(props) => props?.theme?.fontWeight?.bold};
  }
`;
