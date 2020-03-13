import Currency from '../types/Currency';

export const ADD_CURRENCY = 'ADD_CURRENCY';
export const DELETE_CURRENCY = 'DELETE_CURRENCY';
export const UPDATE_CURRENCY = 'UPDATE_CURRENCY';

type DeleteCurrencyAction = {
  type: typeof DELETE_CURRENCY;
  currencyId: number;
};

type AddCurrencyAction = {
  type: typeof ADD_CURRENCY;
  currency: Currency;
};

type UpdateCurrencyAction = {
  type: typeof UPDATE_CURRENCY;
  currency: Currency;
};

export type AppActionsType =
  | DeleteCurrencyAction
  | AddCurrencyAction
  | UpdateCurrencyAction;

export type AppState = {
  currencies: Currency[];
};
