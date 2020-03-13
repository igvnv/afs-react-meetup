/* eslint-disable no-case-declarations */
import {
  ADD_CURRENCY,
  DELETE_CURRENCY,
  UPDATE_CURRENCY,
  AppState,
  AppActionsType,
} from './types';
import currencies from '../currencies';
import { currencyById } from './selectors';

const defaultState: AppState = {
  currencies,
};

const reducer = (state: AppState = defaultState, action: AppActionsType) => {
  switch (action.type) {
    case ADD_CURRENCY:
      const id = Math.max(...state.currencies.map((c) => c.id)) + 1;
      return {
        ...state,
        currencies: [...state.currencies, { ...action.currency, id }],
      };
    case DELETE_CURRENCY:
      const removedCurrency = currencyById(state, action.currencyId);
      return {
        ...state,
        currencies: state.currencies.filter(
          (currency) => currency !== removedCurrency
        ),
      };
    case UPDATE_CURRENCY:
      const updatedCurrency = currencyById(state, action.currency.id);
      return {
        ...state,
        currencies: state.currencies.map((currency) =>
          currency === updatedCurrency ? action.currency : currency
        ),
      };
    default:
      return state;
  }
};

export default reducer;
