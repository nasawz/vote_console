import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';
// import APPCONFIG from 'constants/appConfig';
import DEMO from '../../../demoData';
// import { toggleOffCanvasMobileNav } from 'actions/settingsActions';
// import {
//   CARDS,
//   LAYOUTS,
//   FOUNDATION,
//   UIKIT,
//   FORMS,
//   FEEDBACKS,
//   TABELS,
//   CHARTS,
//   PAGES,
//   ECOMMERCE,
//   USER,
//   EXCEPTION
// } from 'constants/uiComponents';
import Button from '@material-ui/core/Button';
import MaterialIcon from '../../MaterialIcon';

const SubMenu = Menu.SubMenu;

class AppMenu extends React.Component<any, any> {
  // list for AccordionNav
  rootMenuItemKeys = [
    // without submenu
    '/app/dashboard',
    '/app/ui-overview',
    '/app/calendar'
  ];
  rootSubmenuKeys = [
    '/app/layout',
    '/app/foundation',
    '/app/card',
    '/app/ui',
    '/app/form',
    '/app/feedback',
    '/app/table',
    '/app/chart',
    '/app/page',
    '/app/ecommerce',
    '/user',
    '/exception',
    '/app/menu'
  ];

  state = {
    openKeys: ['/app/dashboard']
  };

  onOpenChange = (openKeys) => {
    // AccordionNav
    // console.log(openKeys)
    const latestOpenKey = openKeys.find((key) => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  onMenuItemClick = (item) => {
    // AccordionNav
    const itemKey = item.key;
    if (this.rootMenuItemKeys.indexOf(itemKey) >= 0) {
      this.setState({ openKeys: [itemKey] });
    }

    //
    const { isMobileNav } = this.props;
    if (isMobileNav) {
      this.closeMobileSidenav();
    }
  };

  closeMobileSidenav = () => {
    const { handleToggleOffCanvasMobileNav } = this.props;
    handleToggleOffCanvasMobileNav(true);
  };

  //
  getSubMenuOrItem = (item) => {
    if (item.children && item.children.some((child) => child.name)) {
      const childrenItems = this.getNavMenuItems(item.children);
      // hide submenu if there's no children items
      if (childrenItems && childrenItems.length > 0) {
        return (
          <SubMenu title={<Button className="nav-item">{item.name}</Button>} key={item.path}>
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      return (
        <Menu.Item key={item.path}>
          <Button className="nav-item" href={'#' + item.path}>
            <span>{item.menuName || item.name}</span>
          </Button>
        </Menu.Item>
      );
    }
  };

  getNavMenuItems = (menusData) => {
    if (!menusData) {
      return [];
    }
    return menusData
      .filter((item) => !item.hideInMenu)
      .map((item) => {
        // make dom
        const ItemDom = this.getSubMenuOrItem(item);
        return ItemDom;
      })
      .filter((item) => item);
  };

  render() {
    const { collapsedNav, colorOption, location } = this.props;
    // const mode = collapsedNav ? 'vertical' : 'inline';
    const menuTheme =
      ['31', '32', '33', '34', '35', '36'].indexOf(colorOption) >= 0 ? 'light' : 'dark';
    const currentPathname = location.pathname;

    const menuProps = collapsedNav
      ? {}
      : {
          openKeys: this.state.openKeys
        };

    return (
      <Menu
        className="app-menu"
        theme={menuTheme}
        mode="inline"
        inlineCollapsed={collapsedNav}
        {...menuProps}
        onOpenChange={this.onOpenChange}
        onClick={this.onMenuItemClick}
        selectedKeys={[currentPathname]}
      >
        <Menu.Item key="/app/modify">
          <Button className="nav-item" href="#/app/modify">
            <MaterialIcon icon="how_to_vote" />
            <span className="nav-text">编辑投票</span>
          </Button>
        </Menu.Item>
        <Menu.Item key="/app/result">
          <Button className="nav-item" href="#/app/result">
            <MaterialIcon icon="ballot" />
            <span className="nav-text">投票结果</span>
          </Button>
        </Menu.Item>
        <Menu.Item key="/app/count">
          <Button className="nav-item" href="#/app/count">
            <MaterialIcon icon="poll" />
            <span className="nav-text">统计分析</span>
          </Button>
        </Menu.Item>
        <Menu.Item key="/app/signup-info">
          <Button className="nav-item" href="#/app/signup-info">
            <MaterialIcon icon="people" />
            <span className="nav-text">报名信息</span>
          </Button>
        </Menu.Item>
      </Menu>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    collapsedNav: state.settings.collapsedNav,
    colorOption: state.settings.colorOption,
    location: state.router.location
  };
};

const mapDispatchToProps = ({ settings: { toggleOffCanvasMobileNav } }) => ({
  handleToggleOffCanvasMobileNav: (isOffCanvasMobileNav) => {
    toggleOffCanvasMobileNav(isOffCanvasMobileNav);
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppMenu);
