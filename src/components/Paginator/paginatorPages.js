export const paginatorPages = (pos, page, numAllPages) => {
  return page + pos > 0
    ? page + pos <= numAllPages
      ? page + pos
      : null
    : null;
};
