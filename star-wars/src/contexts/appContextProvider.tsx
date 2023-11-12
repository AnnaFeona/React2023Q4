import { Dispatch, FC, ReactNode, createContext, useState } from 'react';
import { Beer } from '../model';
import { INITIAL_PAGE, INITIAL_LIMIT } from '../model/constants';

export const AppContext = createContext<ContextValueType>({
  searchValue: '',
  cardList: [],
  page: INITIAL_PAGE,
  limit: INITIAL_LIMIT,
});

interface ContextProps {
  children: ReactNode;
}

interface ContextValueType {
  searchValue: string;
  setSearchValue?: Dispatch<React.SetStateAction<string>>;
  cardList: Beer[];
  setCardlist?: Dispatch<React.SetStateAction<Beer[]>>;
  page: number;
  setPage?: Dispatch<React.SetStateAction<number>>;
  limit: number;
  setLimit?: Dispatch<React.SetStateAction<number>>;
}

export const AppContextProvider: FC<ContextProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState('');
  const [cardList, setCardlist] = useState<Beer[]>([]);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const value = {
    searchValue,
    setSearchValue,
    cardList,
    setCardlist,
    page,
    setPage,
    limit,
    setLimit,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
