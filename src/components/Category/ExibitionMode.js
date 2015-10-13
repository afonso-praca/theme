import React from 'react';
import GridLayout from 'components/Category/GridLayout';
import ListLayout from 'components/Category/ListLayout';

class ExibitionMode extends React.Component {
  render() {
    if(this.props.grid) {
      return (<GridLayout products={this.props.products}/>);
    }
    return (<ListLayout products={this.props.products}/>);
  }
}

export default ExibitionMode;
