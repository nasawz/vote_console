import Home from '../views/home';
import { connect } from 'react-redux';

const mapState = (state) => ({
  surveyJSON: state.svModel.surveyJSON
});
const mapDispatch = ({ svModel: { getSurveyJSONAsync, sendSurveyJSONAsync } }) => ({
  getSurveyJSON: () => {
    getSurveyJSONAsync();
  },
  sendSurveyJSON: (survey) => {
    sendSurveyJSONAsync(survey);
  }
});
export default connect(
  mapState,
  mapDispatch
)(Home);
