import React from 'react';
import './PanelNav.less';

class PanelNav extends React.Component {
  handleTouchTap = (e) => {
    this.props.closePanel(e);
  }

  render() {
    return (
      <nav className="PanelNav" data-nav-type={this.props.navType}>
        <button className="header-button" onTouchTap={this.handleTouchTap}/>
      </nav>
    );
  }
}

export default PanelNav;
