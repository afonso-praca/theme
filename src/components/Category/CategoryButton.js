import React from 'react';
import './CategoryButton.less';
import CategoryPanel from 'components/Category/CategoryPanel';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger_icon.svg';
import hamburgerImg from 'assets/icons/hamburger_icon.png';

let iconColor = '#777777';

class CategoryButton extends React.Component {
  state = {
    categoryPanelOpen: false,
    currentView: 'navigation'
  }

  openCategoryPanel = () => {
    this.setState({categoryPanelOpen: true});
  }

  closeCategoryPanel = (ev) => {
    if (ev.currentTarget === ev.target) {
      this.setState({categoryPanelOpen: false});
    }
  }

  render() {
    let isCategoryPanelOpen = this.state.categoryPanelOpen;
    return (
      <div className="CategoryButton">
        <a onClick={this.openCategoryPanel}><SVGIcon className="icon" svg={hamburgerIcon} fallback={hamburgerImg} height={24}
          height={24} padding="4px" fill={iconColor}/></a>
        <CategoryPanel
          categories={this.props.categories}
          facets={this.props.facets}
          isOpen={isCategoryPanelOpen}
          closeCategoryPanel={this.closeCategoryPanel}/>
     </div>
    );
  }
}

export default CategoryButton;