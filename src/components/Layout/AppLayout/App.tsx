import React from 'react';
import classnames from 'classnames';
import { Layout } from 'antd';
import AppHeader from '../Header';
import AppFooter from '../Footer';
import AppContent from '../Content';
import AppSidenav from '../Sidenav';

class AppLayout extends React.Component<any, any> {
  render() {
    const { boxedLayout, fixedSidenav, fixedHeader, children, showMenuCtl } = this.props;
    return (
      <Layout
        id="app-layout"
        className={classnames('app-layout', {
          'boxed-layout': boxedLayout,
          'fixed-sidenav': fixedSidenav,
          'fixed-header': fixedHeader
        })}
      >
        <AppSidenav />
        {fixedHeader ? (
          <Layout>
            <AppHeader showMenuCtl={showMenuCtl} />
            <Layout>
              <AppContent>{children}</AppContent>
              <AppFooter />
            </Layout>
          </Layout>
        ) : (
          <Layout>
            <AppHeader showMenuCtl={showMenuCtl} />
            <AppContent>{children}</AppContent>
            <AppFooter />
          </Layout>
        )}
      </Layout>
    );
  }
}

export default AppLayout;
