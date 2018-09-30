import * as React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import AppLayout from '../../components/Layout/AppLayout';
import Auth from '../common/auth';
import QRCode from 'qrcode.react';
import './index.less';
import { Pagination } from 'antd';

export interface ListProps {
  changeLayout;
}
const ribbons = [
  {
    type: ''
  },
  {
    type: 'ribbon-primary'
  },
  {
    type: 'ribbon-success'
  },
  {
    type: 'ribbon-info'
  },
  {
    type: 'ribbon-warning'
  },
  {
    type: 'ribbon-danger'
  }
];

class List extends React.Component<ListProps, any> {
  componentWillMount() {
    this.props.changeLayout('3');
  }
  public render() {
    return (
      <Auth>
        <AppLayout>
          <div className="container-fluid no-breadcrumb chapter">
            <article className="article">
              <h2 className="article-title" style={{ paddingTop: '1rem' }}>
                {/* 投票 */}
                活动列表
              </h2>
              <QueueAnim type="bottom" className="ui-animate mb-4">
                <div key="1" className="mb-4">
                  <section className="box box-default ribbon-container ribbon-primary">
                    <div className="ribbon-wrapper">
                      <div className="ribbon"> 进行中 </div>
                    </div>
                    <div className="box-body">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="activity-card">
                            <div className="qrcode">
                              <QRCode size={100} value="http://facebook.github.io/react/" />
                            </div>
                            <div className="activity-body">
                              <h4 className="activity__header">xxx</h4>
                              <div className="activity__url">xxx</div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6 state-list">
                          <div className="state-card text-center">
                            <h4>0</h4>
                            <div className="state__info">今日投票</div>
                          </div>
                          <div className="state-card text-center">
                            <h4>0</h4>
                            <div className="state__info">投票总数</div>
                          </div>
                          <div className="state-card text-center">
                            <h4>0</h4>
                            <div className="state__info">今日访问</div>
                          </div>
                          <div className="state-card text-center">
                            <h4>0</h4>
                            <div className="state__info">访问总数</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
                <div key="2" className="mb-4">
                  <section className="box box-default">
                    <div className="box-header">1</div>
                    <div className="box-body">xxx</div>
                  </section>
                </div>
                <div key="3" className="mb-4">
                  <div className="row">
                    <div className="col-md-2 offset-md-5">
                      <section className="box box-default">
                        <div className="box-body text-center">
                          <Pagination key="3" simple defaultCurrent={2} total={50} />
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </QueueAnim>
            </article>
          </div>
        </AppLayout>
      </Auth>
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
