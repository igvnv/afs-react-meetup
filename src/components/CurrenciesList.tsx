import React, { Component } from 'react';
import { connect } from 'react-redux';

import CurrencyEditor from './CurrencyEditor';
import CurrencyAdd from './CurrencyAdd';
import Currency from '../types/Currency';
import { AppState } from '../store/types';

type OwnProps = {};

type StateProps = {
  currencies: Currency[];
};

type DispatchProps = {};

type CurrenciesListProps = OwnProps & StateProps & DispatchProps;

type CurrenciesListState = {
  previousPageTitle: string;
};

class CurrenciesList extends Component<
  CurrenciesListProps,
  CurrenciesListState
> {
  constructor(props: CurrenciesListProps) {
    super(props);

    this.state = {
      previousPageTitle: document.title,
    };
  }

  componentDidMount() {
    const { currencies } = this.props;
    document.title = `${currencies.length} валют`;
  }

  componentDidUpdate() {
    const { currencies } = this.props;
    document.title = `${currencies.length} валют`;
  }

  componentWillUnmount() {
    const { previousPageTitle } = this.state;

    document.title = previousPageTitle;
  }

  render() {
    const { currencies } = this.props;

    return (
      <div className="container">
        <h2>Управление валютами</h2>

        <div className="currency-editor">
          {currencies.map((currency) => (
            <CurrencyEditor key={currency.id} id={currency.id} />
          ))}
          <CurrencyAdd />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState): StateProps => {
  return {
    currencies: state.currencies,
  };
};

export default connect(mapStateToProps)(CurrenciesList);
