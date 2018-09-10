import * as React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import AppLayout from '../../components/Layout/AppLayout';

export interface ListProps {
  changeLayout;
}

class List extends React.Component<ListProps, any> {
  componentWillMount() {
    this.props.changeLayout('3');
  }
  public render() {
    return (
      <AppLayout>
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
      </AppLayout>
    );
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
