import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import DEMO from '../../../demoData';
import { Layout, Tooltip, Popover } from 'antd';
import Badge from '@material-ui/core/Badge';
import Logo from '../../Logo/';
// import { toggleCollapsedNav, toggleOffCanvasMobileNav } from 'actions/settingsActions';
import Notifications from '../../Notifications';
import MaterialIcon from '../../MaterialIcon';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const { Header } = Layout;

class AppHeader extends React.Component<any, any> {
  state = {
    anchorEl: null
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };
  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  onToggleCollapsedNav = () => {
    const { handleToggleCollapsedNav, collapsedNav } = this.props;
    handleToggleCollapsedNav(!collapsedNav);
  };

  onToggleOffCanvasMobileNav = () => {
    const { handleToggleOffCanvasMobileNav, offCanvasMobileNav } = this.props;
    handleToggleOffCanvasMobileNav(!offCanvasMobileNav);
  };

  render() {
    const { headerShadow, colorOption, showLogo } = this.props;
    const { anchorEl } = this.state;

    return (
      <Header
        className={classnames('app-header', {
          'header-elevation': headerShadow
        })}
      >
        <div
          className={classnames('app-header-inner', {
            'bg-white': ['11', '12', '13', '14', '15', '16', '21'].indexOf(colorOption) >= 0,
            'bg-dark': colorOption === '31',
            'bg-primary': ['22', '32'].indexOf(colorOption) >= 0,
            'bg-success': ['23', '33'].indexOf(colorOption) >= 0,
            'bg-info': ['24', '34'].indexOf(colorOption) >= 0,
            'bg-warning': ['25', '35'].indexOf(colorOption) >= 0,
            'bg-danger': ['26', '36'].indexOf(colorOption) >= 0
          })}
        >
          <div className="header-left">
            <div className="list-unstyled list-inline">
              {showLogo && [
                <Logo key="logo" />,
                <div key="divider" className="divider-vertical" />
              ]}
              <a
                href={DEMO.link}
                className="list-inline-item d-none d-md-inline-block"
                onClick={this.onToggleCollapsedNav}
              >
                <MaterialIcon icon="menu" className="list-icon" />
              </a>
              <a
                href={DEMO.link}
                className="list-inline-item d-md-none"
                onClick={this.onToggleOffCanvasMobileNav}
              >
                <MaterialIcon icon="menu" className="list-icon" />
              </a>
            </div>
          </div>

          <div className="header-right">
            <div className="list-unstyled list-inline">
              <li className="list-inline-item search-box seach-box-right d-none d-md-inline-block">
                <div className="search-box-inner">
                  <div className="search-box-icon">
                    <MaterialIcon icon="search" />
                  </div>
                  <input type="text" placeholder="搜索..." />
                  <span className="input-bar" />
                </div>
              </li>
              <Popover
                placement="bottomRight"
                content={<Notifications />}
                trigger="click"
                overlayClassName="app-header-popover"
              >
                <a href={DEMO.link} className="list-inline-item">
                  <Badge className="header-badge" badgeContent={11}>
                    <MaterialIcon icon="notifications_none" className="header-icon-notification" />
                  </Badge>
                </a>
              </Popover>
              <a className="list-inline-item" href={DEMO.link}>
                <div
                  className="avatar"
                  aria-owns={anchorEl ? 'app-header-menu' : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                >
                  <img src="assets/images-demo/g1-sm.jpg" alt="avatar" className="avatar-img" />
                  <span className="avatar-text d-none d-md-inline">{DEMO.user}</span>
                </div>
                <Menu
                  id="app-header-menu"
                  className="app-header-dropdown"
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={this.handleClose}
                >
                  <div className="divider divider-solid my-1 d-block d-md-none" />

                  <MenuItem onClick={this.handleClose}>
                    <a href={DEMO.headerLink.about}>
                      <MaterialIcon icon="info" />
                      关于
                    </a>
                  </MenuItem>
                  <MenuItem onClick={this.handleClose}>
                    <a href={DEMO.headerLink.help}>
                      <MaterialIcon icon="help" />
                      帮助
                    </a>
                  </MenuItem>
                  <div className="divider divider-solid my-1" />
                  <MenuItem onClick={this.handleClose}>
                    <a href={DEMO.headerLink.signOut}>
                      <MaterialIcon icon="forward" />
                      退出
                    </a>
                  </MenuItem>
                </Menu>
              </a>
            </div>
          </div>
        </div>
      </Header>
    );
  }
}

const mapStateToProps = (state) => ({
  offCanvasMobileNav: state.settings.offCanvasMobileNav,
  collapsedNav: state.settings.collapsedNav,
  headerShadow: state.settings.headerShadow,
  colorOption: state.settings.colorOption
});

const mapDispatchToProps = ({ settings: { toggleCollapsedNav, toggleOffCanvasMobileNav } }) => ({
  handleToggleCollapsedNav: (isCollapsedNav) => {
    toggleCollapsedNav(isCollapsedNav);
  },
  handleToggleOffCanvasMobileNav: (isOffCanvasMobileNav) => {
    toggleOffCanvasMobileNav(isOffCanvasMobileNav);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader);
