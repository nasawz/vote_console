export const location: any = (location) => {
  return {
    state: location,
    reducers: {
      changeLocation(state, location) {
        return location;
      }
    },
    effects: (dispatch) => ({})
  };
};
