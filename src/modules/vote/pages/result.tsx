import * as React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import MaterialIcon from '../../../components/MaterialIcon';
import Typography from '@material-ui/core/Typography';

export interface ResultProps {}

class Result extends React.Component<ResultProps, any> {
  public render() {
    return (
      <div className="container-fluid no-breadcrumb">
        <article className="article">
          <QueueAnim type="bottom" className="ui-animate mb-4">
            <div key="1" className="row no-gutters  mb-4">
              <div className="col-xl-6">
                <Typography variant="headline">标题</Typography>
                <Typography variant="subheading" color="textSecondary">
                  瀑布流样式
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  2018-09-07 21:15 至 2018-09-14 21:15
                </Typography>
              </div>
            </div>
            <div key="2" className="row text-center">
              <div className="col-xl-3 col-sm-6">
                <div className="number-card-v2 mdc-elevation--z1 mb-3">
                  <span className="icon-btn icon-btn-round icon-btn-lg text-white bg-success">
                    <MaterialIcon icon="bar_chart" />
                  </span>
                  <div className="box-info">
                    <p className="box-num">
                      16 <span className="size-h4">%</span>
                    </p>
                    <p className="text-muted">Growth</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="number-card-v2 mdc-elevation--z1 mb-3">
                  <span className="icon-btn icon-btn-round icon-btn-lg text-white bg-info">
                    <MaterialIcon icon="people" />
                  </span>
                  <div className="box-info">
                    <p className="box-num">
                      22 <span className="size-h4">%</span>
                    </p>
                    <p className="text-muted">Users</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="number-card-v2 mdc-elevation--z1 mb-3">
                  <span className="icon-btn icon-btn-round icon-btn-lg text-white bg-warning">
                    <MaterialIcon icon="attach_money" />
                  </span>
                  <div className="box-info">
                    <p className="box-num">
                      51 <span className="size-h4">k</span>
                    </p>
                    <p className="text-muted">Profit</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6">
                <div className="number-card-v2 mdc-elevation--z1 mb-3">
                  <span className="icon-btn icon-btn-round icon-btn-lg text-white bg-primary">
                    <MaterialIcon icon="add_shopping_cart" />
                  </span>
                  <div className="box-info">
                    <p className="box-num">
                      21 <span className="size-h4">k</span>
                    </p>
                    <p className="text-muted">Sales</p>
                  </div>
                </div>
              </div>
            </div>
            <div key="3" className="mb-4">
              <section className="box box-default">
                <div className="box-header">
                  <div className="row">
                    <div className="col-6">2</div>
                    <div className="col-6">2</div>
                  </div>
                </div>
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

export default connect(mapState2Props)(Result);
