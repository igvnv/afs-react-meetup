import { ADD_CURRENCY, DELETE_CURRENCY, UPDATE_CURRENCY } from './actionTypes';

export const deleteCurrency = (currencyId) => ({
  type: DELETE_CURRENCY,
  currencyId,
});

export const addCurrency = (currency) => {
  return {
    type: ADD_CURRENCY,
    currency,
  };
};

export const updateCurrency = (currency) => {
  return {
    type: UPDATE_CURRENCY,
    currency,
  };
};
