import { AppState } from './types';
import Currency from '../types/Currency';

/* eslint-disable import/prefer-default-export */

export const currencyById = (state: AppState, id: number): Currency | null => {
  const result = state.currencies.filter((c) => c.id === id);

  if (!result.length) return null;
  return result[0];
};
