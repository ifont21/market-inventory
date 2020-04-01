import { createSelector } from "reselect";

const selectExistences = state => state.existences;

export const selectCurrentExistences = createSelector(
  [selectExistences],
  existences => existences && existences.currentExistences
);

export const selectToggleAdd = createSelector(
  [selectExistences],
  existences => existences && existences.toggleAdd
);
