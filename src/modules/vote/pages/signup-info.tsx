import * as React from 'react';
import { connect } from 'react-redux';

export interface SignupInfoProps {}

class SignupInfo extends React.Component<SignupInfoProps, any> {
  public render() {
    return <div>SignupInfo</div>;
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(SignupInfo);
