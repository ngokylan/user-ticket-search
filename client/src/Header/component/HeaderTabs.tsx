import React from 'react';
import './HeaderTabs.scss';
import { HeaderTabsProps } from '../type';
import { getClass } from '../../_lib/helper';

function HeaderTabs({ tabs }: HeaderTabsProps) {
  return (
    <div className="tabs" id="tab">
      <nav className="tabs__nav" id="tab-nav">
        <ul>
          {Array.isArray(tabs) &&
            tabs.map((item, index) => (
              <li
                className={getClass('tabs__item', '', {
                  active: item.active,
                })}
                key={index}
              >
                <a onClick={item.onClick}>{item.label}</a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}

export default HeaderTabs;
