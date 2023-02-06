import { createSelector } from "reselect";
const currentUserAuth = (state) => state.firebaseReducer.auth;

export default currentUserAuth;

export const isLoggedUser = createSelector(currentUserAuth, (auth) => {
  return auth.isLoaded && !auth.isEmpty;
});
