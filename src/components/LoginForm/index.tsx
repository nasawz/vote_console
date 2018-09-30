import React from 'react';
// import APPCONFIG from 'constants/appConfig';
import DEMO from '../../demoData';
import { withRouter } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MaterialIcon from '../MaterialIcon';
import { Icon } from 'antd';

class NormalForm extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      pwd: ''
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLogin({
      name: this.state.name,
      pwd: this.state.pwd
    });
    // console.log(e)
    // this.props.history.push(DEMO.home2);
  };
  render() {
    return (
      <section className="form-v1-container" style={{ minWidth: '400px' }}>
        <h2>VOTE</h2>
        {/* <p className="lead">Welcome back, sign in with your {'Console'} account</p> */}

        <form onSubmit={this.handleSubmit} className="form-v1">
          <div className="form-group">
            <div className="input-group-v1">
              <div className="input-group-icon">
                <MaterialIcon icon="account_circle" />
              </div>
              <TextField
                onChange={(e) => this.setState({ name: e.target.value })}
                id="login2-name"
                label="用户名"
                fullWidth
                autoComplete="off"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group-v1">
              <div className="input-group-icon">
                <MaterialIcon icon="lock" />
              </div>
              <TextField
                onChange={(e) => this.setState({ pwd: e.target.value })}
                id="login2-password"
                label="密码"
                type="password"
                fullWidth
                autoComplete="off"
              />
            </div>
          </div>
          {/* <div>
            <FormControlLabel
              control={<Checkbox defaultChecked value="login2-remember" color="primary" />}
              label="记住我"
            />
          </div> */}
          <div className="form-group">
            <Button variant="contained" color="primary" type="submit" className="btn-cta btn-block">
              登录
            </Button>
          </div>
        </form>
        {/* <p className="additional-info">
          没有账号? <a href={DEMO.signUp}>立即注册</a>
        </p>
        <p className="additional-info">
          忘记密码? <a href={DEMO.forgotPassword}>重置密码</a>
        </p> */}
      </section>
    );
  }
}

export default withRouter(NormalForm);
