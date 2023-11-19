import { HttpResponse, http } from 'msw';
import { API_BASE_URL } from '../model/constants';
import { allBeers, mockBeerList } from './cardListMock';

export const handlers = [
  http.get(`${API_BASE_URL}`, ({ request }) => {
    const url = new URL(request.url);

    const perPage = url.searchParams.get('per_page');

    if (perPage === '80') return HttpResponse.json(allBeers);

    return HttpResponse.json(mockBeerList);
  }),

  http.get(`${API_BASE_URL}/:id`, ({ params }) => {
    const { id } = params;
    const result = mockBeerList.filter((item) => item.id.toString() === id);
    return HttpResponse.json(result);
  }),

  http.get(`${API_BASE_URL}`, () => {
    return HttpResponse.json(mockBeerList);
  }),
];
