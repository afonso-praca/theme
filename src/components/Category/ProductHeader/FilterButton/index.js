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
      <div className="FilterButton">
        <a onTouchTap={this.openFilterPanel}>
          <SVGIcon className="icon" svg={filterIcon}
                   fallback={filterImg} height={24}
                   padding="4px" fill={iconColor} />
        </a>
        <FilterPanel categories={this.props.categories}
                     facets={this.props.facets}
                     isOpen={isFilterPanelOpen}
                     closeFilterPanel={this.closeFilterPanel} />
      </div>
    );
  }
}

export default FilterButton;

