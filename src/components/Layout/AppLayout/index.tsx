import React from 'react';
import { connect } from 'react-redux';
// import AppCustomizer from 'components/Customizer';
// import APPCONFIG from 'constants/appConfig';

import App from './App';
import AppV2 from './AppV2';
import ContentOnly from './ContentOnly';
import HeaderContentFooter from './HeaderContentFooter';

class AppLayout extends React.Component<any, any> {
  updateLayout(layout, boxedLayout, fixedSidenav, fixedHeader, children) {
    switch (layout) {
      case '1':
        return (
          <App
            boxedLayout={boxedLayout}
            showMenuCtl={true}
            fixedSidenav={fixedSidenav}
            fixedHeader={fixedHeader}
          >
            {children}
          </App>
        );
      case '2':
        return (
          <AppV2 boxedLayout={boxedLayout} showMenuCtl={true}>
            {children}
          </AppV2>
        );
      case '3':
        return (
          <HeaderContentFooter
            boxedLayout={boxedLayout}
            fixedHeader={fixedHeader}
            showMenuCtl={false}
          >
            {children}
          </HeaderContentFooter>
        );
      case '4':
        return <ContentOnly boxedLayout={boxedLayout}>{children}</ContentOnly>;
      default:
        return <App showMenuCtl={true}>{children}</App>;
    }
  }

  isShowCustomizer() {
    // if (APPCONFIG.customizer) {
    //   return <AppCustomizer />;
    // }
    return null;
  }

  render() {
    const { layout, boxedLayout, fixedSidenav, fixedHeader, children } = this.props;

    return (
      <div id="app-layout-container">
        {this.updateLayout(layout, boxedLayout, fixedSidenav, fixedHeader, children)}
        {this.isShowCustomizer()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  layout: state.settings.layout,
  boxedLayout: state.settings.boxedLayout,
  fixedSidenav: state.settings.fixedSidenav,
  fixedHeader: state.settings.fixedHeader
});

export default connect(mapStateToProps)(AppLayout);
