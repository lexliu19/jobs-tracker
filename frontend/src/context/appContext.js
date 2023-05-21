import React, { useContext, useState } from 'react';

export const initialState = {
  isLoading: false,
  showAlert: true,
  alertText: '',
  alertType: '',
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);
  return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
