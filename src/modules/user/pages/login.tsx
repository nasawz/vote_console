import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';

import LoginForm from '../../../components/LoginForm';

export interface FormCardProps {
  onLogin;
}

export function FormCard(props: FormCardProps) {
  return (
    <section className="form-card-page form-card row no-gutters">
      <div
        className="form-card__img form-card__img--left col-lg-6"
        style={{
          backgroundImage:
            "url('assets/images-demo/covers/riccardo-oliva-231656-unsplash-cut-progressive.jpg')"
        }}
      />
      <div className="form-card__body col-lg-6 p-5 px-lg-8 d-flex align-items-center">
        <LoginForm onLogin={props.onLogin} />
      </div>
    </section>
  );
}

export interface LoginProps {
  login;
}
class Login extends React.Component<LoginProps, any> {
  async onLogin(params) {
    let user = await this.props.login({
      name: params.name,
      pwd: params.pwd
    });
    if (user) {
      location.replace('#/list');
    }
  }

  public render() {
    return (
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <FormCard onLogin={this.onLogin.bind(this)} />
        </div>
      </QueueAnim>
    );
  }
}

const mapState2Props = (state) => {
  return {
    theme: state.settings.theme,
    user: state.user.user,
    userFatching: state.user.loading
  };
};

const map2Dispatch = ({ user: { getUserAsync, loginAsync } }) => ({
  touch: getUserAsync,
  login: loginAsync
});

export default connect(
  mapState2Props,
  map2Dispatch
)(Login);
