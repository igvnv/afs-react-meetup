import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CurrencyEditor from './CurrencyEditor';
import CurrencyAdd from './CurrencyAdd';

class CurrenciesList extends Component {
  constructor(props) {
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

CurrenciesList.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      base: PropTypes.bool,
    })
  ).isRequired,
};

const mapStateToProps = (state) => {
  return {
    currencies: state.currencies,
  };
};

export default connect(mapStateToProps)(CurrenciesList);
