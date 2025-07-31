import actionTypes from "../actions/actionTypes";

const initialState = {
  gender: [],
  roleL: [],
  position: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GENDER_START:
      console.log("check redux start", action);
      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_SUCCESS:
      console.log("check redux success", action);

      return {
        ...state,
      };

    case actionTypes.FETCH_GENDER_FAILED:
      console.log("check redux failed", action);

      return {
        ...state,
      };

    default:
      return state;
  }
};

export default adminReducer;
