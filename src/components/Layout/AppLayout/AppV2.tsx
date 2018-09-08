import React from 'react';
import classnames from 'classnames';
import { Layout } from 'antd';
import AppHeader from '../Header';
import AppFooter from '../Footer';
import AppContent from '../Content';
import AppSidenav from '../Sidenav/index2';
import AppBreadcrumb from '../Breadcrumb';
const { Content } = Layout;

class AppLayout extends React.Component<any, any> {
  render() {
    const { boxedLayout } = this.props;

    return (
      <Layout
        id="app-v2-layout"
        className={classnames('app-layout', {
          'boxed-layout': boxedLayout
        })}
      >
        <AppHeader showLogo={true} />
        <AppBreadcrumb />
        <Content className="app-content">
          <Layout>
            <AppSidenav />
            <AppContent />
          </Layout>
        </Content>
        <AppFooter />
      </Layout>
    );
  }
}

export default AppLayout;
