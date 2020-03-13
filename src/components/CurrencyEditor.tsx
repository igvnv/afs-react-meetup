import React from 'react';
import { FaSave, FaTrashAlt } from 'react-icons/fa';
import { connect } from 'react-redux';

import { deleteCurrency, updateCurrency } from '../store/actions';
import { currencyById } from '../store/selectors';
import Currency from '../types/Currency';
import { AppState } from '../store/types';

type OwnProps = {
  id: number;
};

type StateProps = Currency;

type DispatchProps = {
  onDelete: (currencyId: number) => void;
  onSave: (currency: Currency) => void;
};

type CurrencyEditorProps = OwnProps & StateProps & DispatchProps;

type CurrencyEditorState = {
  codeValue: string;
  labelValue: string;
  rateValue: string;
  errorMessage: string;
};

class CurrencyEditor extends React.Component<
  CurrencyEditorProps,
  CurrencyEditorState
> {
  constructor(props: CurrencyEditorProps) {
    super(props);

    this.state = {
      codeValue: props.code,
      labelValue: props.label,
      rateValue: props.rate.toString(),
      errorMessage: '',
    };

    this.saveCurrency = this.saveCurrency.bind(this);
    this.deleteCurrency = this.deleteCurrency.bind(this);
    this.validate = this.validate.bind(this);
  }

  saveCurrency(e: React.SyntheticEvent) {
    e.preventDefault();

    if (!this.validate()) return;

    const { onSave, id } = this.props;
    const { codeValue, labelValue, rateValue } = this.state;

    onSave({
      id,
      code: codeValue,
      label: labelValue,
      rate: parseFloat(rateValue),
    });
  }

  deleteCurrency(e: React.SyntheticEvent) {
    e.preventDefault();

    const { onDelete, id } = this.props;

    onDelete(id);
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
    const { id, base } = this.props;
    const { codeValue, labelValue, rateValue, errorMessage } = this.state;

    return (
      <form className="currency-editor__item" onSubmit={this.saveCurrency}>
        <div className="currency-editor__code">
          <div className="labeled-input">
            <label
              htmlFor={`currencyCodeInput${id}`}
              className="labeled-input__label"
            >
              Код валюты
            </label>
            <input
              type="text"
              id={`currencyCodeInput${id}`}
              className="labeled-input__input"
              value={codeValue}
              onChange={(e) => this.setState({ codeValue: e.target.value })}
            />
          </div>
        </div>
        <div className="currency-editor__label">
          <div className="labeled-input">
            <label
              htmlFor={`currencyLabelInput${id}`}
              className="labeled-input__label"
            >
              Наименование валюты
            </label>
            <input
              type="text"
              id={`currencyLabelInput${id}`}
              className="labeled-input__input"
              value={labelValue}
              onChange={(e) => this.setState({ labelValue: e.target.value })}
            />
          </div>
        </div>
        <div className="currency-editor__rate">
          <div className="labeled-input">
            <label
              htmlFor={`currencyRateInput${id}`}
              className="labeled-input__label"
            >
              В 1 USD
            </label>
            <input
              type="text"
              id={`currencyRateInput${id}`}
              className="labeled-input__input"
              value={rateValue}
              onChange={(e) => this.setState({ rateValue: e.target.value })}
            />
          </div>
        </div>
        <div className="currency-editor__actions">
          <button type="submit" className="currency-editor__action-button">
            <FaSave className="currency-editor__action-icon" />
            <span className="currency-editor__action-label">Сохранить</span>
          </button>
          <button
            type="button"
            className="currency-editor__action-button currency-editor__action-button_delete  currency-editor__action-button_narrow"
            disabled={base}
            onClick={this.deleteCurrency}
          >
            <FaTrashAlt className="currency-editor__action-icon" />
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

const mapStateToProps = (state: AppState, ownProps: OwnProps): StateProps => {
  const { id } = ownProps;

  const currency = currencyById(state, id);

  if (currency === null) throw new Error('No currency find');

  return currency;
};

const mapDispatchToProps: DispatchProps = {
  onDelete: deleteCurrency,
  onSave: updateCurrency,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyEditor);
