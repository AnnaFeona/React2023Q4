export const updateSearchString = (value?: string, page?: string | number, limit?: string | number): string => {
  if (!value && !page && !limit) return '';

  const name = value === '' ? '' : `beer_name=${value}&`;
  if (!page && limit) return `?${name}&per_page=${limit}`;
  if (!limit && page) return `?${name}&page=${page}`;
  if (!limit && !page) return `?${name}`;

  return `?${name}page=${page}&per_page=${limit}`;
};

export const transformInputValue = (val: string) => {
  return val.split(' ').filter((item) => item.length > 0);
};
