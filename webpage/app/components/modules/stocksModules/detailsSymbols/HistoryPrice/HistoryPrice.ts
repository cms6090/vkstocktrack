import styled from 'styled-components';

export const ChartWrap = styled.section`
  width: 100%;

  .tab-time {
    .ant-tabs-nav-list {
      width: 100%;
    }

    .ant-tabs-nav {
      padding: 4px;
      width: 200px;
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
