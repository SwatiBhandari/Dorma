import React, { createContext, useContext, useReducer } from 'react';

const initialState = {
  popularItem: null,
  imageList: null, // Add imageList to the initial state
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POPULAR_ITEM':
      return { ...state, popularItem: action.payload };
    case 'SET_IMAGE_LIST':
      return { ...state, imageList: action.payload }; // Add case to handle setting imageList
    default:
      return state;
  }
};

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <SharedStateContext.Provider value={{ state, dispatch }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => useContext(SharedStateContext);
