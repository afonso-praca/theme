import React from 'react';
import './style.less';
import FilterPanel from './FilterPanel';
import SVGIcon from 'utils/SVGIcon';
import filterIcon from 'assets/icons/slider_icon.svg';
import filterImg from 'assets/icons/slider_icon.png';

class FilterButton extends React.Component {
  state = {
    filterPanelOpen: false,
    currentView: 'navigation'
  }

  openFilterPanel = () => {
    this.setState({filterPanelOpen: true});
  }

  closeFilterPanel = (ev) => {
    if (ev.currentTarget === ev.target) {
      this.setState({filterPanelOpen: false});
    }
  }

  render() {
    let iconColor = '#777777';
    let isFilterPanelOpen = this.state.filterPanelOpen;

    return (
      <div>
        <button className="FilterButton" onTouchTap={this.openFilterPanel}>
          <SVGIcon className="icon" svg={filterIcon}
                   fallback={filterImg} width={18}
                   fill={iconColor} />
          <span className="icon-label">Filtros</span>
        </button>
        <FilterPanel categories={this.props.categories}
                     facets={this.props.facets}
                     isOpen={isFilterPanelOpen}
                     closeFilterPanel={this.closeFilterPanel} />
      </div>
    );
  }
}

export default FilterButton;
