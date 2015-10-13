import React from 'react';
import './style.less';
import './FilterOption/style.less';

class FilterList extends React.Component {
  render() {
    return (
      <div className="FilterList">
        <div className="filter-header">
          <h3 className="filter-title">
            Marcas <span className="filter-badge">1</span>
          </h3>
        </div>
        <ul className="filter-actual-list">
          <li className="FilterOption" data-is-selected="true">
            <label className="filter-inner">
              <span className="filter-label">Osklen</span>
              <input className="filter-checkbox" type="checkbox" defaultChecked="checked"/>
            </label>
          </li>
          <li className="FilterOption" data-is-selected="false">
            <label className="filter-inner">
              <span className="filter-label">Farm</span>
              <input className="filter-checkbox" type="checkbox"/>
            </label>
          </li>
          <li className="FilterOption" data-is-selected="false">
            <label className="filter-inner">
              <span className="filter-label">Oh Boy!</span>
              <input className="filter-checkbox" type="checkbox"/>
            </label>
          </li>
          <li className="FilterOption" data-is-selected="false">
            <label className="filter-inner">
              <span className="filter-label">Cantão</span>
              <input className="filter-checkbox" type="checkbox"/>
            </label>
          </li>
          <li className="FilterOption" data-is-selected="false">
            <label className="filter-inner">
              <span className="filter-label">Reserva</span>
              <input className="filter-checkbox" type="checkbox"/>
            </label>
          </li>
        </ul>
        <div className="filter-footer">
          <a className="filter-link" href="#">
            Ver todas as marcas (30)
          </a>
        </div>
      </div>
    );
  }
}

export default FilterList;

