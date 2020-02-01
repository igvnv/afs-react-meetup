import React, { lazy, Suspense } from 'react';
import './styles/main.scss';

import Tabs from './components/Tabs';
import CurrenciesList from './components/CurrenciesList';
import Loader from './components/Loader';
import currenciesList from './currencies';

const Layout = lazy(() => import('./Layout'));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'currencies',
      currencies: currenciesList,
    };

    this.updateCurrency = this.updateCurrency.bind(this);
    this.deleteCurrency = this.deleteCurrency.bind(this);
    this.addCurrency = this.addCurrency.bind(this);
  }

  updateCurrency(updatedCurrency) {
    const { currencies } = this.state;

    this.setState({
      currencies: currencies.map((currency) => {
        if (currency.id !== updatedCurrency.id) return currency;
        return { ...currency, ...updatedCurrency };
      }),
    });
  }

  deleteCurrency(currencyId) {
    const { currencies } = this.state;

    this.setState({
      currencies: currencies.filter((currency) => currency.id !== currencyId),
    });
  }

  addCurrency({code, label, rate}) {
    const { currencies } = this.state;
    const ids = currencies.map(currency => currency.id);
    const id = Math.max.apply(null, ids) + 1;
    currencies.push({id, code, label, rate});
    this.setState({currencies});
  }

  render() {
    const { activeTab, currencies } = this.state;

    const tabsList = [
      { name: 'converter', label: 'Конвертер' },
      { name: 'currencies', label: 'Валюты' },
      { name: 'layout', label: 'Layout' },
    ];

    return (
      <div className="wrapper">
        <Tabs
          active={activeTab}
          list={tabsList}
          onChange={(tabName) => {
            this.setState({ activeTab: tabName });
          }}
        />

        {activeTab === 'currencies' && (
          <CurrenciesList
            onCurrencyUpdate={this.updateCurrency}
            onCurrencyDelete={this.deleteCurrency}
            onCurrencyAdd={this.addCurrency}
            currencies={currencies}
          />
        )}
        {activeTab === 'layout' && (
          <Suspense fallback={<Loader />}>
            <Layout />
          </Suspense>
        )}
      </div>
    );
  }
}

export default App;
