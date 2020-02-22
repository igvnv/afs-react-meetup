import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Converter = ({ currencies }) => {
  const [code, setCode] = useState('RUB');
  const [currencyOneAmount, setCurrencyOneAmount] = useState('1000');
  const [currencyTwoAmount, setCurrencyTwoAmount] = useState('0');

  useEffect(() => {
    const { rate } = currencies.find(currency => currency.code === code);
    setCurrencyTwoAmount((parseFloat(currencyOneAmount) * rate).toFixed(2));
  }, [code, currencies, currencyOneAmount]);

  function getLiSelectorClass(currencyCode) {
    return currencyCode === code
      ? 'currency-selector-item currency-selector-item_active'
      : 'currency-selector-item';
  }

  return (
    <div className="container">
      <div className="converter">
        <h2>Конвертер валют</h2>

        <div className="converter-input">
          <div className="converter-input__currency">
            <span className="converter-input__currency-label">
              USD <FaAngleDown />
            </span>
            <input
              className="converter-input__input"
              type="number"
              value={currencyOneAmount}
              onChange={(e) => setCurrencyOneAmount(e.target.value)}
            />
          </div>
        </div>

        <div className="converter-input">
          <div className="converter-input__currency">
            <span className="converter-input__currency-label">
              {code} <FaAngleUp />
            </span>
            <input
              className="converter-input__input"
              value={currencyTwoAmount}
              type="number"
              onChange={(e) => setCurrencyTwoAmount(e.target.value)}
            />
          </div>

          <ul className="currency-selector">
            {currencies.map(currency => (
              <li className="currency-selector__item" key={currency.code}>
                <div
                  className={getLiSelectorClass(currency.code)}
                  role="button"
                  tabIndex={0}
                  onClick={() => setCode(currency.code)}
                  onKeyPress={() => {}}
                >
                  <span className="currency-selector-item__code">{currency.code}</span>
                  <span className="currency-selector-item__label">{currency.label}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
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