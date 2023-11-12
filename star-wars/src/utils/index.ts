export const updateSearchString = (value: string, page?: string | number, limit?: string | number): string => {
  const name = value === '' ? '' : `beer_name=${value}&`;
  if (!page || !limit) return `?${name}`;
  return `?${name}page=${page}&per_page=${limit}`;
};

export const transformInputValue = (val: string) => {
  return val.split(' ').filter((item) => item.length > 0);
};
