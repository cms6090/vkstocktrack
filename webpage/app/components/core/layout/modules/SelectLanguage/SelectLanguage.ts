import styled from 'styled-components';

export const LanguageSelectWrapper = styled.div`
  display: flex;
  align-items: center;

  .ant-select-selector {
    border: none !important;
    box-shadow: none !important;
  }

  .ant-select-selection-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .select-icon {
    position: relative;

    width: 9px;
    height: 9px;

    img {
      object-fit: contain;
    }
  }

  .flag {
    position: relative;

    min-width: 30px;
    max-width: 30px;
    height: 20px;

    img {
      object-fit: cover;
    }
  }
`;
