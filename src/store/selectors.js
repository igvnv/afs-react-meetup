/* eslint-disable import/prefer-default-export */

export const currencyById = (state, id) => {
  const result = state.currencies.filter((c) => c.id === id);

  if (!result.length) return null;
  return result[0];
};
