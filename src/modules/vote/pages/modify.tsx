import * as React from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

export interface ModifyProps {}

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

class Modify extends React.Component<ModifyProps, any> {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  public render() {
    const { value } = this.state;
    return (
      <div className="container-fluid no-breadcrumb">
        <article className="article">
          {/* <h2 className="article-title page-title">编辑投票</h2> */}
          <QueueAnim type="bottom" className="ui-animate mb-4">
            <div key="1" className="mb-4">
              <section className="box box-default">
                <Tabs value={value} onChange={this.handleChange}>
                  <Tab label="基础设置" />
                  <Tab label="页面设置" />
                  <Tab label="高级设置" />
                </Tabs>
                <div className="box-body">
                  <div className="grid-structure">
                    <div className="row">
                      <div className="col-md-8">
                        {value === 0 && <TabContainer>Item One</TabContainer>}
                        {value === 1 && <TabContainer>Item Two</TabContainer>}
                        {value === 2 && <TabContainer>Item Three</TabContainer>}
                      </div>
                      <div className="col-md-4">preview</div>
                    </div>
                  </div>
                </div>
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

export default connect(mapState2Props)(Modify);
