import styled from 'styled-components';

export const WrapFooter = styled.footer`
  width: 100%;
  padding: 24px 24px;

  border-top: 1px solid #eff2f5;
`;

export const TopFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eff2f5;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const TopRight = styled.footer`
  p {
    color: #616e85;
    text-transform: capitalize;
    font-weight: ${(props) => props?.theme?.fontWeight?.semiBold};
  }

  h4 {
    font-size: ${(props) => props?.theme?.fontSize.lg};
    font-weight: ${(props) => props?.theme?.fontWeight?.bold};
  }
`;

export const TopLeft = styled.footer``;

export const BotFooter = styled.footer`
  padding: 12px 0;
  color: #616e85;
  font-weight: ${(props) => props?.theme?.fontWeight?.regular};
`;
