import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import loadable from 'react-loadable';
import classnames from 'classnames';
import { MuiThemeProvider } from '@material-ui/core/styles';
import LoadingComponent from './components/Loading';

import lightTheme from './themes/lightTheme';
import grayTheme from './themes/grayTheme';
import darkTheme from './themes/darkTheme';
// 3rd
// import 'styles/antd.less';
import './styles/bootstrap/bootstrap.scss';
// custom
import './styles/layout.scss';
import './styles/theme.scss';
import './styles/ui.scss';

let Account = loadable({
  loader: () => import(/* webpackChunkName: "user" */ './modules/user/index'),
  loading: LoadingComponent
});

import Vote from './modules/vote';

export interface AppProps {
  match;
  location;
  theme;
}

class App extends React.Component<AppProps, any> {
  componentDidMount() {}
  public render() {
    const { match, location, theme } = this.props;
    const isRoot = location.pathname === '/' ? true : false;
    if (isRoot) {
      return <Redirect to={'/vote/modify'} />;
    }
    let materialUITheme;
    switch (theme) {
      case 'gray':
        materialUITheme = grayTheme;
        break;
      case 'dark':
        materialUITheme = darkTheme;
        break;
      default:
        materialUITheme = lightTheme;
    }

    return (
      <MuiThemeProvider theme={materialUITheme}>
        <div
          id="app"
          className={classnames('app-main', {
            'theme-gray': theme === 'gray',
            'theme-dark': theme === 'dark'
          })}
        >
          <Route path={`${match.url}vote`} component={Vote} />
          <Route path={`${match.url}user`} component={Account} />
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapState2Props = (state) => {
  return {
    theme: state.settings.theme
  };
};

const mapDispatch = ({ location: { changeLocation } }) => ({
  changeLocation: (location) => changeLocation(location)
});

export default connect(mapState2Props)(App);
