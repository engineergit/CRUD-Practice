import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  users: [
    { id: "1", name: "u1" },
    { id: "2", name: "u2" },
    { id: "3", name: "u3" },
  ],
};
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  //action
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  const AddUser = (user) => {
    dispatch({
      type: "Add_USER",
      payload: user,
    });
  };
  const EditUser = (id) => {
    dispatch({
      type: "EDIT_USER",
      payload: id,
    });
  };
  const UpdateUser = (data) => {
    dispatch({
      type: "UPDATE_USER",
      payload: data,
    });
  };
  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        removeUser,
        AddUser,
        EditUser,
        UpdateUser
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
