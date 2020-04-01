import { types } from "./existences.types";

export const loadExistence = existences => ({
  type: types.LOAD_EXISTENCES,
  payload: existences
});

export const toggleAdd = () => ({
  type: types.TOGGLE_ADD
});

export const addExistence = existence => ({
  type: types.ADD_EXISTENCE,
  payload: existence
});
