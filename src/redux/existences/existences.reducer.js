import { types } from "./existences.types";

const INITIAL_STATE = {
  currentExistences: [],
  toggleAdd: false
};

const existencesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case types.LOAD_EXISTENCES:
      return {
        ...state,
        currentExistences: payload
      };
    case types.TOGGLE_ADD:
      return {
        ...state,
        toggleAdd: !state.toggleAdd
      };
    case types.ADD_EXISTENCE:
      return {
        ...state,
        currentExistences: [...state.currentExistences, payload],
        toggleAdd: !state.toggleAdd
      };

    default:
      return state;
  }
};

export default existencesReducer;
