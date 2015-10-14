import React from 'react';
import './style.less';
import CategoryList from './CategoryList';
import PanelNav from 'components/Category/common/PanelNav';

class CategoryPanel extends React.Component {
  render() {
    return (
      <aside className="CategoryPanel" data-is-open={this.props.isOpen}>
        <div className="frame">
          <PanelNav closePanel={this.props.closeCategoryPanel}
                    navType='button' />
          <div className="content">
            <h1 className="category-header container">
              Departamentos
            </h1>
            <CategoryList category={this.props.category}
                          closeCategoryPanel={this.props.closeCategoryPanel} />
          </div>
        </div>
      </aside>
    );
  }
}

export default CategoryPanel;

