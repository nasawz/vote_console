import * as React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import MaterialIcon from '../../../components/MaterialIcon';

export interface SignupInfoProps {}

class SignupInfo extends React.Component<SignupInfoProps, any> {
  public render() {
    return (
      <div className="container-fluid no-breadcrumb">
        <article className="article">
          <QueueAnim type="bottom" className="ui-animate mb-4">
            <div key="1" className="mb-4">
              <section className="box box-default">
                <div className="box-header">1</div>
                <div className="box-body">xxx</div>
              </section>
            </div>
          </QueueAnim>
        </article>
      </div>
    );
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(SignupInfo);
