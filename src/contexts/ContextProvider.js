import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  chart: false,
  userProfile: false,
  notification: false,
};

export function ContextProvider({ children }) {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  const [screenSize, setScreenSize] = useState(undefined);

  const value = useMemo(() => ({
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
  }));

  return (
    <StateContext.Provider
      value={value}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);
