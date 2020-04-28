import {UserAtionTypes} from "./user.types";

export const setCurrentUser = (payload) => ({
  type: UserAtionTypes.SET_CURRENT_USER,
  payload,
});
