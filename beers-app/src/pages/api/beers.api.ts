import { API_BASE_URL } from '../../model/constants';
import { updateSearchString } from '../../utils';

export const getBeerByName = async (name?: string, page?: number, limit?: number) => {
  const request = updateSearchString(name, page, limit);
  const beers = await fetch(`${API_BASE_URL}${request}`);

  if (!beers.ok) throw new Error(beers.statusText);

  return beers.json();
};

export const getBeerById = async (id: number) => {
  const beer = await fetch(`${API_BASE_URL}/${id}`);

  if (!beer.ok) throw new Error(beer.statusText);

  return beer.json();
};
