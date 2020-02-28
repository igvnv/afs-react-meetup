import React, { useState, useEffect } from 'react';
import { FaAngleDown } from 'react-icons/fa';
import PropTypes from 'prop-types';

const ConverterInput = ({ currencies, currency, amount, onCurrencyChange, onAmountChange }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setHidden(true);
      }
    };
    if (!hidden) {
      window.addEventListener('keydown', handleEsc);
      return () => {
        window.removeEventListener('keydown', handleEsc);
      };
    }
  }, [hidden]);

  function getLiSelectorClass(currencyCode) {
    return currencyCode === currency
      ? 'currency-selector-item currency-selector-item_active'
      : 'currency-selector-item';
  }

  return (
    <div className="converter-input">
      <div className="converter-input__currency">
        <span
          className="converter-input__currency-label"
          onClick={() => setHidden(!hidden)}
        >
          {currency} <FaAngleDown />
        </span>
        <input
          className="converter-input__input"
          value={amount}
          type="number"
          onChange={(e) => onAmountChange(e.target.value)}
        />
      </div>

      <ul className="currency-selector" hidden={hidden}>
        {currencies.map(item => (
          <li className="currency-selector__item" key={item.code}>
            <div
              className={getLiSelectorClass(item.code)}
              role="button"
              tabIndex="0"
              onClick={() => {
                onCurrencyChange(item.code);
                setHidden(true);
              }}
              onKeyPress={() => {
              }}
            >
              <span className="currency-selector-item__code">{item.code}</span>
              <span className="currency-selector-item__label">{item.label}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

ConverterInput.propTypes = {
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      code: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      rate: PropTypes.number.isRequired,
      base: PropTypes.bool,
    }),
  ).isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  onAmountChange: PropTypes.func.isRequired
};

export default ConverterInput;