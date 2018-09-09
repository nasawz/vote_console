import React from 'react';
import QueueAnim from 'rc-queue-anim';
import { connect } from 'react-redux';

import LoginForm from '../../../components/LoginForm';

export interface FormCardProps {}

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
        <LoginForm />
      </div>
    </section>
  );
}

export interface LoginProps {}
class Login extends React.Component<LoginProps, any> {
  public render() {
    return (
      <QueueAnim type="bottom" className="ui-animate">
        <div key="1">
          <FormCard />
        </div>
      </QueueAnim>
    );
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Login);
