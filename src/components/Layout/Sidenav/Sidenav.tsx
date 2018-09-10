import React from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import Logo from '../../Logo';
// import APPCONFIG from 'constants/appConfig';
import DEMO from '../../../demoData';
// import { toggleCollapsedNav, toggleOffCanvasNav } from 'actions/settingsActions';
import MaterialIcon from '../../MaterialIcon';
import AppMenu from './Menu';
const { Sider } = Layout;

class AppSidenav extends React.Component<any, any> {
  render() {
    const {
      collapsedNav,
      offCanvasNav,
      sidenavWidth,
      headerShadow,
      sidenavShadow,
      colorOption
    } = this.props;
    const collapsedWidth = offCanvasNav ? 0 : 80;

    return (
      <Sider
        collapsible
        collapsed={collapsedNav || offCanvasNav}
        collapsedWidth={collapsedWidth}
        trigger={null}
        width={sidenavWidth}
        id="app-sidenav"
        className={classnames('app-sidenav d-none d-md-flex', {
          'sidenav-elevation': sidenavShadow,
          'sidenav-bg-light': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0,
          'sidenav-bg-dark': ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) < 0
        })}
      >
        <section
          className={classnames('sidenav-header', {
            'header-elevation': headerShadow,
            'bg-dark': ['11', '31'].indexOf(colorOption) >= 0,
            'bg-white': colorOption === '21',
            'bg-primary': ['12', '22', '32'].indexOf(colorOption) >= 0,
            'bg-success': ['13', '23', '33'].indexOf(colorOption) >= 0,
            'bg-info': ['14', '24', '34'].indexOf(colorOption) >= 0,
            'bg-warning': ['15', '25', '35'].indexOf(colorOption) >= 0,
            'bg-danger': ['16', '26', '36'].indexOf(colorOption) >= 0
          })}
        >
          <Logo />
          <a href="#/" className="brand">
            {'Console'}
          </a>
        </section>

        <div className="sidenav-content" ref="sidenavContent">
          <AppMenu />
        </div>

        <div className="sidenav-footer">
          <a target="_blank" href={DEMO.productLink}>
            <MaterialIcon icon="help" className="nav-icon" />
            <span className="nav-text">
              <span>帮助</span> & <span>支持</span>
            </span>
          </a>
        </div>
      </Sider>
    );
  }
}

const mapStateToProps = (state) => ({
  collapsedNav: state.settings.collapsedNav,
  offCanvasNav: state.settings.offCanvasNav,
  sidenavWidth: state.settings.sidenavWidth,
  headerShadow: state.settings.headerShadow,
  sidenavShadow: state.settings.sidenavShadow,
  colorOption: state.settings.colorOption
});

const mapDispatchToProps = ({ settings: { toggleCollapsedNav, toggleOffCanvasNav } }) => {
  return {
    handleToggleCollapsedNav: (isCollapsedNav) => {
      toggleCollapsedNav(isCollapsedNav);
    },
    handleToggleOffCanvasNav: (isOffCanvasNav) => {
      toggleOffCanvasNav(isOffCanvasNav);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppSidenav);
