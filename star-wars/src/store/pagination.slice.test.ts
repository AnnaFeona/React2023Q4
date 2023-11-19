import { mockBeerList } from '../mocks/cardListMock';
import { paginationReducer, setPage, setItemsPerPage, setSearchValue, setSearchResult } from './pagination.slice';

describe('paginationSlice', () => {
  it('should handle setPage action', () => {
    const initialState = { page: 1, itemsPerPage: 10, searchValue: '', searchResult: [] };

    const nextState = paginationReducer(initialState, setPage(2));

    expect(nextState.page).toBe(2);
  });

  it('should handle setItemsPerPage action', () => {
    const initialState = { page: 1, itemsPerPage: 10, searchValue: '', searchResult: [] };

    const nextState = paginationReducer(initialState, setItemsPerPage(20));

    expect(nextState.itemsPerPage).toBe(20);
  });

  it('should handle setSearchValue action', () => {
    const initialState = { page: 1, itemsPerPage: 10, searchValue: '', searchResult: [] };

    const nextState = paginationReducer(initialState, setSearchValue('beer'));

    expect(nextState.searchValue).toBe('beer');
  });

  it('should handle setSearchResult action', () => {
    const initialState = { page: 1, itemsPerPage: 10, searchValue: '', searchResult: [] };

    const nextState = paginationReducer(initialState, setSearchResult(mockBeerList));

    expect(nextState.searchResult).toEqual(mockBeerList);
  });
});
