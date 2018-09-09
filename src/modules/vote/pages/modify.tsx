import * as React from 'react';
import { connect } from 'react-redux';

export interface ModifyProps {}

class Modify extends React.Component<ModifyProps, any> {
  public render() {
    return <div>Modify</div>;
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Modify);
