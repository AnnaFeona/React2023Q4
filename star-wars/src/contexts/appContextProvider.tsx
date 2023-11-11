import { Dispatch, FC, ReactNode, createContext, useState } from 'react';

export const AppContext = createContext<ContextValueType>({ searchValue: '' });

interface ContextProps {
  children: ReactNode;
}

interface ContextValueType {
  searchValue: string;
  setSearchValue?: Dispatch<React.SetStateAction<string>>;
}

export const AppContextProvider: FC<ContextProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');

  const value = { searchValue, setSearchValue };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
