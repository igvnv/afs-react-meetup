import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConverterInput from './ConverterInput';

class Converter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: props.currencies,
      currency1: 'USD',
      currency2: 'RUB',
      amount1: '1000',
      amount2: '0'
    };
    this.setCurrency1 = this.setCurrency1.bind(this);
    this.setCurrency2 = this.setCurrency2.bind(this);
    this.setAmount1 = this.setAmount1.bind(this);
    this.setAmount2 = this.setAmount2.bind(this);
  }

  componentDidMount() {
    this.setAmount1('1000');
  }

  getRate1(name) {
    const { currencies, currency2 } = this.state;
    const { rate: rate1 } = currencies.find(currency => currency.code === name);
    const { rate: rate2 } = currencies.find(currency => currency.code === currency2);
    return rate2 / rate1;
  }

  getRate2(name) {
    const { currencies, currency1 } = this.state;
    const { rate: rate1 } = currencies.find(currency => currency.code === currency1);
    const { rate: rate2 } = currencies.find(currency => currency.code === name);
    return rate2 / rate1;
  }

  setCurrency1(currency) {
    const { amount1 } = this.state;
    this.setState({
      currency1: currency,
      amount2: (parseFloat(amount1) * this.getRate1(currency)).toFixed(2),
    });
  }

  setCurrency2(currency) {
    const { amount2 } = this.state;
    this.setState({
      currency2: currency,
      amount1: (parseFloat(amount2) / this.getRate2(currency)).toFixed(2),
    });
  }

  setAmount1(amount) {
    const { currency1 } = this.state;
    this.setState({
      amount1: amount,
      amount2: (parseFloat(amount) * this.getRate1(currency1)).toFixed(2),
    });
  }

  setAmount2(amount) {
    const { currency2 } = this.state;
    this.setState({
      amount1: (parseFloat(amount) / this.getRate2(currency2)).toFixed(2),
      amount2: amount,
    });
  }

  render() {
    const { currencies, currency1, currency2, amount1, amount2 } = this.state;
    return (
      <div className="container">
        <div className="converter">
          <h2>Конвертер валют</h2>
          <ConverterInput
            currencies={currencies}
            currency={currency1}
            amount={amount1}
            onCurrencyChange={this.setCurrency1}
            onAmountChange={this.setAmount1}
          />
          <ConverterInput
            currencies={currencies}
            currency={currency2}
            amount={amount2}
            onCurrencyChange={this.setCurrency2}
            onAmountChange={this.setAmount2}
          />
        </div>
      </div>
    );
  }
}

Converter.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      base: PropTypes.bool,
    }),
  ).isRequired,
};

export default Converter;