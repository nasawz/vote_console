import React from 'react';
import { Layout, Icon } from 'antd';
// import APPCONFIG from 'constants/appConfig';
import DEMO from '../../../demoData';
const { Footer } = Layout;
const date = new Date();
const year = date.getFullYear();
const AppFooter = () => (
  <Footer className="app-footer app-footer-custom">
    <div className="footer-inner-v1">
      <span className="small">
        © {year}{' '}
        <a className="brand" target="_blank" href={DEMO.productLink}>
          {'VOTE'}
        </a>
      </span>
      <span className="small">
        Built with Love <Icon type="heart-o" />
      </span>
    </div>
  </Footer>
);

export default AppFooter;
