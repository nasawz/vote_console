import * as React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { Route, HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './app';
export interface RootProps {
  store;
  history;
}

export default class Root extends React.Component<RootProps, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    const { store, history } = this.props;
    return (
      <Provider store={store}>
        <Router>
          <ScrollToTop>
            <Route path="/" component={App} />
          </ScrollToTop>
        </Router>
      </Provider>
    );
  }
}
