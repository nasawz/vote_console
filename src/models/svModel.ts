export const svModel = {
  state: {
    surveyJSON: {
      pages: [
        {
          name: 'page1',
          elements: [
            {
              type: 'rating',
              name: 'question1'
            },
            {
              type: 'comment',
              name: 'question2',
              visibleIf: '{question1} < 2',
              title: '为什么不满意'
            }
          ]
        }
      ]
    }
  },
  reducers: {},
  effects: (dispatch) => ({
    async getSurveyJSONAsync(payload, state) {
      console.log('TODO get json');
    },
    async sendSurveyJSONAsync(payload, state) {
      console.log(payload.data);
    }
  })
};
