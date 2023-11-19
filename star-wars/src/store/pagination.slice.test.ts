import { paginationReducer, setPage, setItemsPerPage } from './pagination.slice';

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
});
