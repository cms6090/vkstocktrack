import styled from 'styled-components';

export const ChartWrap = styled.section`
  width: 100%;

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

  .news-tooltip {
    padding: 10px;
    max-width: 400px;

    p {
      margin-top: 8px;
    }
  }

  .tab-time {
    .ant-tabs-nav-list {
      width: 100%;
    }

    .ant-tabs-nav {
      padding: 4px;
      width: 350px;
      height: 32px;
      transition: all 0.5s;
      border-radius: 8px;
      background: #eff2f5;
      margin: 0;
      margin-left: auto;

      &::before {
        content: none;
      }

      .ant-tabs-tab {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 4px 8px;
        border-radius: 8px;
        margin: 0px;

        color: #616e85;
        font-family: Mulish;
        font-size: 12px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;

        &:hover {
          .ant-tabs-tab-btn {
            color: #616e85;
          }
        }
      }

      .ant-tabs-ink-bar {
        display: none;
      }

      .ant-tabs-tab-active {
        background: ${({ theme }) => theme.colors.other.background3};
        border-bottom: none;

        .ant-tabs-tab-btn {
          color: #616e85;
        }
        &:hover {
          .ant-tabs-tab-btn {
            color: #616e85;
          }
        }
      }

      .ant-tabs-nav-operations {
        display: none !important;
      }
    }
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;

  .ant-select {
    width: 140px;

    .ant-select-selector {
      background: #eff2f5;
      color: #616e85;
    }
  }
`;
