
export default {
  setQuickSelectData: (state, quickSelectData) => {
    state.quickSelectData = quickSelectData;
  },
  setFeedbackCount: (state, feedbackCount) => {
    state.feedbackCount = feedbackCount;
  },
  setMonthlyAdditionalData: (state, monthlyAdditionalData) => {
    state.monthlyAdditionalData = monthlyAdditionalData;
  },
  setQuarterQuery: (state, quarterQuery) => {
    state.quarterQuery = quarterQuery;
  }
}