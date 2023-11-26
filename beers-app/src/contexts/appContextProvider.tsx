import { FC, ReactNode, createContext, useState } from 'react';
import { StateCall, Beer } from '../model';
import { INITIAL_PAGE, INITIAL_LIMIT } from '../model/constants';

export const AppContext = createContext<ContextValueType>({
  search: { value: '' },
  beer: { value: [] },
  page: { value: INITIAL_PAGE },
  limit: { value: INITIAL_LIMIT },
});

interface ContextProps {
  children: ReactNode;
}

interface ContextValueType {
  search: StateCall<string>;
  beer: StateCall<Beer[]>;
  page: StateCall<number>;
  limit: StateCall<number>;
}

export const AppContextProvider: FC<ContextProps> = ({ children }) => {
  const _search = useState('');
  const _beer = useState<Beer[]>([]);
  const _page = useState(INITIAL_PAGE);
  const _limit = useState(INITIAL_LIMIT);

  const value = {
    search: { value: _search[0], setValue: _search[1] },
    beer: { value: _beer[0], setValue: _beer[1] },
    limit: { value: _page[0], setValue: _page[1] },
    page: { value: _limit[0], setValue: _limit[1] },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
