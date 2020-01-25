import React, { useState } from 'react';
import './styles/main.scss';
import {
  FaAngleDown,
  FaSave,
  FaTrashAlt,
  FaPlus,
  FaAngleUp,
} from 'react-icons/fa';

/**
 * Пример использования всех возможных CSS-классов
 */
const Layout = () => {
  const [currencyOneAmount, setCurrencyOneAmount] = useState('1000');
  const [currencyTwoAmount, setCurrencyTwoAmount] = useState('62000.50');

  const [rurCode, setRurCode] = useState('RUR');
  const [rurLabel, setRurLabel] = useState('Российский рубль');
  const [rurRate, setRurRate] = useState('61.7754');

  const [byrCode, setByrCode] = useState('BYR');
  const [byrLabel, setByrLabel] = useState('Белорусский рубль');
  const [byrRate, setByrRate] = useState('2.1123');

  return (
    <div className="wrapper">
      <div className="tabs">
        <span className="tabs__tab tabs__tab_active">Конвертер</span>
        <span className="tabs__tab">Валюты</span>
      </div>

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
                value={currencyOneAmount}
                onChange={(e) => setCurrencyOneAmount(e.target.value)}
              />
            </div>
          </div>

          <div className="converter-input">
            <div className="converter-input__currency">
              <span className="converter-input__currency-label">
                RUR <FaAngleUp />
              </span>
              <input
                className="converter-input__input"
                value={currencyTwoAmount}
                onChange={(e) => setCurrencyTwoAmount(e.target.value)}
              />
            </div>
            <ul className="currency-selector">
              <li className="currency-selector__item">
                <div className="currency-selector-item">
                  <span className="currency-selector-item__code">USD</span>
                  <span className="currency-selector-item__label">
                    Доллар США
                  </span>
                </div>
              </li>
              <li className="currency-selector__item">
                <div className="currency-selector-item currency-selector-item_active">
                  <span className="currency-selector-item__code">RUR</span>
                  <span className="currency-selector-item__label">
                    Российский рубль
                  </span>
                </div>
              </li>
              <li className="currency-selector__item">
                <div className="currency-selector-item">
                  <span className="currency-selector-item__code">BYR</span>
                  <span className="currency-selector-item__label">
                    Белорусский рубль
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container">
        <h2>Управление валютами</h2>

        <div className="currency-editor">
          <form className="currency-editor__item">
            <div className="currency-editor__code">
              <div className="labeled-input">
                <label
                  htmlFor="currencyCodeInput1"
                  className="labeled-input__label"
                >
                  Код валюты
                </label>
                <input
                  type="text"
                  id="currencyCodeInput1"
                  className="labeled-input__input"
                  value={rurCode}
                  onChange={(e) => setRurCode(e.target.value)}
                />
              </div>
            </div>
            <div className="currency-editor__label">
              <div className="labeled-input">
                <label
                  htmlFor="currencyLabelInput1"
                  className="labeled-input__label"
                >
                  Наименование валюты
                </label>
                <input
                  type="text"
                  id="currencyLabelInput1"
                  className="labeled-input__input"
                  value={rurLabel}
                  onChange={(e) => setRurLabel(e.target.value)}
                />
              </div>
            </div>
            <div className="currency-editor__rate">
              <div className="labeled-input">
                <label
                  htmlFor="currencyRateInput1"
                  className="labeled-input__label"
                >
                  В 1 USD
                </label>
                <input
                  type="text"
                  id="currencyRateInput1"
                  className="labeled-input__input"
                  value={rurRate}
                  onChange={(e) => setRurRate(e.target.value)}
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
              >
                <FaTrashAlt className="currency-editor__action-icon" />
              </button>
            </div>

            <div className="currency-editor__message currency-editor__message_error">
              Текст ошибки
            </div>
          </form>

          <form className="currency-editor__item">
            <div className="currency-editor__code">
              <div className="labeled-input">
                <label
                  htmlFor="currencyCodeInput2"
                  className="labeled-input__label"
                >
                  Код валюты
                </label>
                <input
                  type="text"
                  id="currencyCodeInput2"
                  className="labeled-input__input"
                  value={byrCode}
                  onChange={(e) => setByrCode(e.target.value)}
                />
              </div>
            </div>
            <div className="currency-editor__label">
              <div className="labeled-input">
                <label
                  htmlFor="currencyLabelInput2"
                  className="labeled-input__label"
                >
                  Наименование валюты
                </label>
                <input
                  type="text"
                  id="currencyLabelInput2"
                  className="labeled-input__input"
                  value={byrLabel}
                  onChange={(e) => setByrLabel(e.target.value)}
                />
              </div>
            </div>
            <div className="currency-editor__rate">
              <div className="labeled-input">
                <label
                  htmlFor="currencyRateInput2"
                  className="labeled-input__label"
                >
                  В 1 USD
                </label>
                <input
                  type="text"
                  id="currencyRateInput2"
                  className="labeled-input__input"
                  value={byrRate}
                  onChange={(e) => setByrRate(e.target.value)}
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
              >
                <FaTrashAlt className="currency-editor__action-icon" />
              </button>
            </div>
          </form>

          <div className="currency-editor__delimiter" />

          <form className="currency-editor__item">
            <div className="currency-editor__code">
              <div className="labeled-input">
                <label
                  htmlFor="currencyCodeInput3"
                  className="labeled-input__label"
                >
                  Код валюты
                </label>
                <input
                  type="text"
                  id="currencyCodeInput3"
                  className="labeled-input__input"
                />
              </div>
            </div>
            <div className="currency-editor__label">
              <div className="labeled-input">
                <label
                  htmlFor="currencyLabelInput3"
                  className="labeled-input__label"
                >
                  Наименование валюты
                </label>
                <input
                  type="text"
                  id="currencyLabelInput3"
                  className="labeled-input__input"
                />
              </div>
            </div>
            <div className="currency-editor__rate">
              <div className="labeled-input">
                <label
                  htmlFor="currencyRateInput3"
                  className="labeled-input__label"
                >
                  В 1 USD
                </label>
                <input
                  type="text"
                  id="currencyRateInput3"
                  className="labeled-input__input"
                />
              </div>
            </div>
            <div className="currency-editor__actions">
              <button type="submit" className="currency-editor__action-button">
                <FaPlus className="currency-editor__action-icon" />
                <span className="currency-editor__action-label">Добавить</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Layout;
