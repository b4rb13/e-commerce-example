import {UserAtionTypes} from "./user.types";

const userReducer = (state = { currentUser: null }, action) => {
  switch (action.type) {
    case UserAtionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
