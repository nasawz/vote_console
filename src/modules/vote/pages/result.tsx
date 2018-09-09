import * as React from 'react';
import { connect } from 'react-redux';

export interface ResultProps {}

class Result extends React.Component<ResultProps, any> {
  public render() {
    return <div>Result</div>;
  }
}

const mapState2Props = (state) => {
  return {};
};

export default connect(mapState2Props)(Result);
