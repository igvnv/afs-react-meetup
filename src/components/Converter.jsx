import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ConverterInput from './ConverterInput';

const Converter = ({ currencies }) => {
  const [currency1, setCurrency1] = useState('USD');
  const [currency2, setCurrency2] = useState('RUB');
  const [amount1, setAmount1] = useState('1000');
  const [amount2, setAmount2] = useState('0');
  const [prevC1, setPrevC1] = useState();
  const [prevA1, setPrevA1] = useState();

  function getRate1(name) {
    const { rate: rate1 } = currencies.find(currency => currency.code === name);
    const { rate: rate2 } = currencies.find(currency => currency.code === currency2);
    return rate2 / rate1;
  }

  function getRate2(name) {
    const { rate: rate1 } = currencies.find(currency => currency.code === currency1);
    const { rate: rate2 } = currencies.find(currency => currency.code === name);
    return rate2 / rate1;
  }

  function convert1(amount, currency) {
    return (parseFloat(amount) * getRate1(currency)).toFixed(2);
  }

  function convert2(amount, currency) {
    return (parseFloat(amount) / getRate2(currency)).toFixed(2);
  }

  useEffect(() => {
    if (currency1 !== prevC1 || amount1 !== prevA1) {
       setAmount2(convert1(amount1, currency1));
    }
    else {
       setAmount1(convert2(amount2, currency2));
    }
    setPrevC1(currency1);
    setPrevA1(amount1);
  }, [currency1, currency2, amount1, amount2]);

  return (
    <div className="container">
      <div className="converter">
        <h2>Конвертер валют</h2>
        <ConverterInput
          currencies={currencies}
          currency={currency1}
          amount={amount1}
          onCurrencyChange={setCurrency1}
          onAmountChange={setAmount1}
        />
        <ConverterInput
          currencies={currencies}
          currency={currency2}
          amount={amount2}
          onCurrencyChange={setCurrency2}
          onAmountChange={setAmount2}
        />
      </div>
    </div>
  );
};

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