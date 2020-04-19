import React, { createContext, useReducer } from "react";

export const UserContext = createContext();

const INITIAL_STATE = {
  currentUser: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { currentUser } = state;
  const loadUser = (user) => dispatch({ type: "LOAD_USER", payload: user });

  return (
    <UserContext.Provider value={{ currentUser, loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
