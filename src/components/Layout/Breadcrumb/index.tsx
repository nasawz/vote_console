import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import MaterialIcon from '../../MaterialIcon';

class Section extends React.Component<any, any> {
  render() {
    const { location } = this.props;
    const pathSnippets = location.pathname.split('/').filter((i) => i);
    const pathSnippetsFormatted = pathSnippets.map((snippet, i) => {
      return snippet.replace(/-/g, ' ');
    });
    const extraBreadcrumbItems = pathSnippetsFormatted.map((snippet, index) => {
      return <Breadcrumb.Item key={index}>{snippet}</Breadcrumb.Item>;
    });

    const breadcrumbItems = [
      <Breadcrumb.Item key="home">
        <MaterialIcon icon="home" />
      </Breadcrumb.Item>
    ].concat(extraBreadcrumbItems);

    return (
      <div className="app-breadcrumb">
        <Breadcrumb separator=">" className="md-breadcrumb">
          {breadcrumbItems}
        </Breadcrumb>
      </div>
    );
  }
}

export default withRouter(Section);
