import React from 'react';
import classnames from 'classnames';
import { Layout } from 'antd';
import AppHeader from '../Header';
import AppContent from '../Content';
import AppFooter from '../Footer';

class AppLayout extends React.Component<any, any> {
  render() {
    const { boxedLayout, fixedHeader } = this.props;

    return (
      <Layout
        id="app-layout"
        className={classnames('app-layout', {
          'boxed-layout': boxedLayout,
          'fixed-header': fixedHeader
        })}
      >
        <AppHeader showLogo={true} />
        <AppContent />
        <AppFooter />
      </Layout>
    );
  }
}

export default AppLayout;
