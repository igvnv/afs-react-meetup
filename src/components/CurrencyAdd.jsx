import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa';

class CurrencyAdd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codeValue: '',
      labelValue: '',
      rateValue: '',
      errorMessage: '',
    };
    this.addCurrency = this.addCurrency.bind(this);
    this.validate = this.validate.bind(this);
  }

  addCurrency(e) {
    e.preventDefault();
    if (!this.validate()) return;
    const { onCurrencyAdd } = this.props;
    const { codeValue, labelValue, rateValue } = this.state;
    onCurrencyAdd({ code: codeValue, label: labelValue, rate: parseFloat(rateValue) });
    document.getElementById('CurrencyAddForm').reset();
  }

  validate() {
    const { codeValue, labelValue, rateValue } = this.state;

    if (!codeValue) {
      this.setState({ errorMessage: 'Код валюты не указан' });
      return false;
    }

    if (!labelValue) {
      this.setState({ errorMessage: 'Наименование валюты не указано' });
      return false;
    }

    if (!rateValue) {
      this.setState({ errorMessage: 'Стоимость валюты не указана' });
      return false;
    }

    if (Number.isNaN(parseFloat(rateValue))) {
      this.setState({ errorMessage: 'Стоимость валюты должна быть числом' });
      return false;
    }

    this.setState({ errorMessage: '' });
    return true;
  }

  render() {
    const { errorMessage } = this.state;

    return (
      <form id="CurrencyAddForm" className="currency-editor__item">
        <div className="currency-editor__code">
          <div className="labeled-input">
            <label
              htmlFor="currencyCodeInput"
              className="labeled-input__label"
            >
              Код валюты
            </label>
            <input
              type="text"
              id="currencyCodeInput"
              className="labeled-input__input"
              onChange={(e) => this.setState({ codeValue: e.target.value })}
            />
          </div>
        </div>
        <div className="currency-editor__label">
          <div className="labeled-input">
            <label
              htmlFor="currencyLabelInput"
              className="labeled-input__label"
            >
              Наименование валюты
            </label>
            <input
              type="text"
              id="currencyLabelInput"
              className="labeled-input__input"
              onChange={(e) => this.setState({ labelValue: e.target.value })}
            />
          </div>
        </div>
        <div className="currency-editor__rate">
          <div className="labeled-input">
            <label
              htmlFor="currencyRateInput"
              className="labeled-input__label"
            >
              В 1 USD
            </label>
            <input
              type="text"
              id="currencyRateInput"
              className="labeled-input__input"
              onChange={(e) => this.setState({ rateValue: e.target.value })}
            />
          </div>
        </div>
        <div className="currency-editor__actions">
          <button
            type="submit"
            className="currency-editor__action-button"
            onClick={this.addCurrency}
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
  }
}

CurrencyAdd.propTypes = {
  onCurrencyAdd: PropTypes.func.isRequired,
};

export default CurrencyAdd;