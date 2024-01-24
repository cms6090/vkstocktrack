import styled from 'styled-components';

export const WrapMenu = styled.div`
  border-radius: 10px;
  min-height: calc(100vh - 310px);
  background: #fdfdfd;
`;

export const Menu = styled.div`
  overflow-y: scroll;
  border: none;
  /* height: calc(100vh - 60px); */
  display: flex;
  flex-direction: column;
  padding: 10px;

  ::-webkit-scrollbar {
    width: 0px;
  }

  h3 {
    text-transform: uppercase;
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: 900;
    color: #5972cf;
    text-align: center;
  }

  a {
    width: 100%;
    padding: 20px;
    margin-bottom: 8px;
    color: ${(props) => props.theme.colors.other.text4};
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
    background: #ffffff;
    box-shadow:
      rgba(88, 102, 126, 0.12) 0px 1px 2px 0px,
      rgba(88, 102, 126, 0.08) 0px 4px 24px 0px;

    &:hover {
      background-color: #e3e8f6;
      color: ${(props) => props.theme.colors.primaryColor};
    }

    font-style: normal;
    color: ${(props) => props.color || props.theme.colors.other.text4};
    font-size: ${(props) => props.theme.fontSize.md};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    line-height: 26px;

    .flag {
      position: relative !important;
    }
  }

  .item-active {
    background: #e3e8f6;
    position: relative;
    color: ${(props) => props.color || props.theme.colors.primaryColor};
  }
`;
