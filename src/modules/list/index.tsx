import * as React from 'react';
import { connect } from 'react-redux';
import AppLayout from '../../components/Layout/AppLayout';

export interface ListProps {
  changeLayout;
}

class List extends React.Component<ListProps, any> {
  componentWillMount() {
    this.props.changeLayout('3');
  }
  public render() {
    return <AppLayout>a</AppLayout>;
  }
}

const mapState2Props = (state) => {
  return {};
};
const mapDispatchToProps = ({ settings: { changeLayout } }) => ({
  changeLayout: (type) => {
    changeLayout({ layout: type });
  }
});

export default connect(
  mapState2Props,
  mapDispatchToProps
)(List);
