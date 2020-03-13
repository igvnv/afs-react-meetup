import React from 'react';

import Tab from '../types/Tab';

type TabsProps = {
  list: Tab[];
  active: string;
  onChange: (newTab: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ list, active, onChange }) => {
  const onTabChange = (tab: Tab) => {
    onChange(tab.name);
  };

  return (
    <div className="tabs">
      {list.map((tab) => (
        <span
          key={tab.name}
          onClick={() => onTabChange(tab)}
          onKeyDown={() => onTabChange(tab)}
          role="button"
          tabIndex={-1}
          className={`tabs__tab ${
            tab.name === active ? 'tabs__tab_active' : ''
          }`}
        >
          {tab.label}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
