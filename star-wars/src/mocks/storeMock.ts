import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

// Import your actions and the reducer from the paginationSlice
// import { setPage, setItemsPerPage, setSearchValue, setSearchResult } from './paginationSlice';

const middlewares = [thunk];
export const mockStore = configureMockStore(middlewares);
