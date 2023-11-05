export const updateSearchString = (value: string, page?: string | number, limit?: string | number): string => {
  if (!page || !limit) return `?beer_name=${value}`;
  return `?beer_name=${value}&page=${page}&per_page=${limit}`;
};

export const updateSearchParams = (value: string, page?: string, limit?: string) => {
  return {
    beer_name: value,
    page,
    per_page: limit,
  };
};

export const transformInputValue = (val: string) => {
  return val
    .split(' ')
    .filter((item) => item.length > 0)
    .join('_');
};
