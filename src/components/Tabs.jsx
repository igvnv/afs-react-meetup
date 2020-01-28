import React from 'react';
import PropTypes from 'prop-types';

const Tabs = ({ list, active, onChange }) => {
  const onTabChange = (tab) => {
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
          tabIndex="-1"
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

Tabs.propTypes = {
  active: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Tabs;
