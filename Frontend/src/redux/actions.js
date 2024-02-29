import { LOAD_USER_DATA } from "./actions-types";


export const loadUserData = (data) => ({
  type: LOAD_USER_DATA,
  payload: data,
});