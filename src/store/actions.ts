import {
  AppActionsType,
  DELETE_CURRENCY,
  ADD_CURRENCY,
  UPDATE_CURRENCY,
} from './types';
import Currency from '../types/Currency';

export const deleteCurrency = (currencyId: number): AppActionsType => ({
  type: DELETE_CURRENCY,
  currencyId,
});

export const addCurrency = (currency: Currency): AppActionsType => {
  return {
    type: ADD_CURRENCY,
    currency,
  };
};

export const updateCurrency = (currency: Currency): AppActionsType => {
  return {
    type: UPDATE_CURRENCY,
    currency,
  };
};
