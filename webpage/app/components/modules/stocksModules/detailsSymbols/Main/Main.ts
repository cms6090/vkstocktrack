import { Tabs } from 'antd';
import styled from 'styled-components';

export const TabsDetails = styled(Tabs)`
  .ant-tabs-nav-list {
    .ant-tabs-tab {
      padding: 12px 16px;
      margin-left: 0;
      font-size: ${(props) => props.theme.fontSize.md};
      font-weight: ${(props) => props.theme.fontWeight?.bold};
    }

    .ant-tabs-tab-active {
      border-bottom: 2px solid ${(props) => props.theme.colors?.primaryColor};
      color: ${(props) => props.theme.colors?.primaryColor};
    }
  }
`;
