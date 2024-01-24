import styled from 'styled-components';

export const WrapNews = styled.div`
  max-width: 1100px;
  margin-left: auto;
  margin-right: auto;
  padding: 32px 0;
`;

export const NewItem = styled.div`
  display: flex;

  @media ${(props) => props.theme.breakpoints.lgMax} {
    flex-direction: column;
  }
`;
export const ItemContent = styled.div``;
