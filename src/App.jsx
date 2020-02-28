import React, { lazy, Suspense } from 'react';
import './styles/main.scss';

import Tabs from './components/Tabs';
import Converter from './components/Converter';
import CurrenciesList from './components/CurrenciesList';
import Loader from './components/Loader';

const Layout = lazy(() => import('./Layout'));

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'converter',
    };
  }

  render() {
    const { activeTab } = this.state;

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

        {activeTab === 'converter' && (
          <Converter currencies={currencies} />
        )}
        {activeTab === 'currencies' && <CurrenciesList />}
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
