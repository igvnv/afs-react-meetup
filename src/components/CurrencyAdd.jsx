import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';
import { connect } from 'react-redux';

import { addCurrency } from '../store/actions';

const CurrencyAddFunc = ({ onCurrencyAdd }) => {
  const [code, setCode] = useState('');
  const [label, setLabel] = useState('');
  const [rate, setRate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!code) {
      setErrorMessage('Код валюты не указан');
      return;
    }

    if (!label) {
      setErrorMessage('Наименование валюты не указано');
      return;
    }

    if (!rate) {
      setErrorMessage('Стоимость валюты не указана');
      return;
    }

    if (Number.isNaN(parseFloat(rate))) {
      setErrorMessage('Стоимость валюты должна быть числом');
      return;
    }

    setErrorMessage('');
  }, [code, label, rate]);

  function addCurrencyHandler(e) {
    e.preventDefault();
    onCurrencyAdd({
      code,
      label,
      rate: parseFloat(rate),
    });

    setCode('');
    setLabel('');
    setRate('');
  }

  return (
    <form className="currency-editor__item" onSubmit={addCurrencyHandler}>
      <div className="currency-editor__code">
        <div className="labeled-input">
          <label htmlFor="currencyCodeInput" className="labeled-input__label">
            Код валюты
          </label>
          <input
            type="text"
            id="currencyCodeInput"
            className="labeled-input__input"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
      </div>
      <div className="currency-editor__label">
        <div className="labeled-input">
          <label htmlFor="currencyLabelInput" className="labeled-input__label">
            Наименование валюты
          </label>
          <input
            type="text"
            id="currencyLabelInput"
            className="labeled-input__input"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
          />
        </div>
      </div>
      <div className="currency-editor__rate">
        <div className="labeled-input">
          <label htmlFor="currencyRateInput" className="labeled-input__label">
            В 1 USD
          </label>
          <input
            type="text"
            id="currencyRateInput"
            className="labeled-input__input"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
      </div>
      <div className="currency-editor__actions">
        <button
          type="submit"
          className="currency-editor__action-button"
          disabled={errorMessage}
        >
          <FaPlus className="currency-editor__action-icon" />
          <span className="currency-editor__action-label">Добавить</span>
        </button>
      </div>
      {errorMessage && (
        <div className="currency-editor__message currency-editor__message_error">
          {errorMessage}
        </div>
      )}
    </form>
  );
};

CurrencyAddFunc.propTypes = {
  onCurrencyAdd: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  onCurrencyAdd: addCurrency,
};

export default connect(null, mapDispatchToProps)(CurrencyAddFunc);
