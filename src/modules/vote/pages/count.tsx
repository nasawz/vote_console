import * as React from 'react';
import { connect } from 'react-redux';

export interface CountProps {}

class Count extends React.Component<CountProps, any> {
  public render() {
    return <div>Count</div>;
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Count);
