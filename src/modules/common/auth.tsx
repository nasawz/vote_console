import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import LinearProgress from '@material-ui/core/LinearProgress';
export interface AuthProps {
  userFatching;
  user;
  touch;
}

class Auth extends React.Component<AuthProps, any> {
  componentWillMount() {
    this.props.touch();
  }
  public render() {
    let { userFatching, user } = this.props;
    if (!user && !userFatching) {
      return <Redirect to={'/user/login'} />;
    }
    if (user) {
      return this.props.children;
    }
    return '';
  }
}

const mapState2Props = (state) => {
  return {
    user: state.user.user,
    userFatching: state.user.loading
  };
};

const mapDispatchToProps = ({ settings: { changeLayout }, user: { getUserAsync } }) => ({
  changeLayout: (type) => {
    changeLayout({ layout: type });
  },
  touch: getUserAsync
});
export default connect(
  mapState2Props,
  mapDispatchToProps
)(Auth);
