import React from 'react';
import { withRouter } from 'react-router';
import { Layout } from 'antd';
const { Content } = Layout;

class AppContent extends React.Component<any, any> {
  render() {
    const { match, children } = this.props;
    return <Content id="app-content">{children}</Content>;
  }
}

export default withRouter(AppContent);
