import actionTypes from "./actionTypes";
import { getAllCodeUserService } from "../../services/userService";

// export const fetchGenderStart = () => ({
//   type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = async (dispatch, getState) => {
  try {
    let res = await getAllCodeUserService("GENDER");
    if (res && res.errCode === 0) {
      fetchGenderSuccess(res.data);
    } else {
      fetchGenderSuccess();
    }
  } catch (e) {
    fetchGenderFailed();
    console.log("fetchGenderFailed", e);
  }
};

export const fetchGenderSuccess = (genderData) => ({
  type: actionTypes.FETCH_GENDER_SUCCESS,
  data: genderData,
});

export const fetchGenderFailed = () => ({
  type: actionTypes.FETCH_GENDER_FAILED,
});
