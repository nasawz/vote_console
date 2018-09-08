import * as React from 'react';
import Auth from '../components/auth';
import Paper from '../components/paper';

export interface HomeProps {
  surveyJSON;
  getSurveyJSON;
  sendSurveyJSON;
}

export default class Home extends React.Component<HomeProps, any> {
  componentWillMount() {
    this.props.getSurveyJSON();
  }
  public render() {
    let { surveyJSON, sendSurveyJSON } = this.props;
    return (
      <Paper>
        <Auth />
      </Paper>
    );
  }
}
