import { mockBeerList } from '../../mocks/cardList.mock';
import { searchReducer, setSearchValue, setSearchResult } from './search.slice';

describe('searchSlice', () => {
  it('should handle setSearchValue action', () => {
    const initialState = { searchValue: '', searchResult: [] };
    const nextState = searchReducer(initialState, setSearchValue('beer'));
    expect(nextState.searchValue).toBe('beer');
  });

  it('should handle setSearchResult action', () => {
    const initialState = { searchValue: '', searchResult: [] };
    const nextState = searchReducer(initialState, setSearchResult(mockBeerList));

    expect(nextState.searchResult).toEqual(mockBeerList);
  });
});
