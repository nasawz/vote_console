import React from 'react';
import classnames from 'classnames';
import { Layout } from 'antd';
import AppContent from '../Content';

class AppLayout extends React.Component<any, any> {
  render() {
    const { boxedLayout } = this.props;

    return (
      <Layout
        id="app-layout"
        className={classnames('app-layout', {
          'boxed-layout': boxedLayout
        })}
      >
        <AppContent />
      </Layout>
    );
  }
}

export default AppLayout;
