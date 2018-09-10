import * as React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import loadable from 'react-loadable';

import AppLayout from '../../components/Layout/AppLayout';

import LoadingComponent from '../../components/Loading';

let Modify = loadable({
  loader: () => import(/* webpackChunkName: "modify" */ './pages/modify'),
  loading: LoadingComponent
});

let Count = loadable({
  loader: () => import(/* webpackChunkName: "count" */ './pages/count'),
  loading: LoadingComponent
});

let Result = loadable({
  loader: () => import(/* webpackChunkName: "result" */ './pages/result'),
  loading: LoadingComponent
});

let SignupInfo = loadable({
  loader: () => import(/* webpackChunkName: "result" */ './pages/signup-info'),
  loading: LoadingComponent
});

export interface PageProps {
  match;
  changeLayout;
}

class Page extends React.Component<PageProps, any> {
  componentWillMount() {
    this.props.changeLayout('1');
  }
  public render() {
    let { match } = this.props;
    return (
      <AppLayout>
        <Route path={`${match.url}/modify`} component={Modify} />
        <Route path={`${match.url}/count`} component={Count} />
        <Route path={`${match.url}/result`} component={Result} />
        <Route path={`${match.url}/signup-info`} component={SignupInfo} />
      </AppLayout>
    );
  }
}

const mapState2Props = (state) => {
  return {};
};

const mapDispatchToProps = ({ settings: { changeLayout } }) => ({
  changeLayout: (type) => {
    changeLayout({ layout: type });
  }
});

export default connect(
  mapState2Props,
  mapDispatchToProps
)(Page);
