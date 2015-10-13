import React from 'react';
import GridLayout from './GridLayout';
import ListLayout from './ListLayout';

class ExibitionMode extends React.Component {
  render() {
    let layout = this.props.grid ?
      ( <GridLayout products={this.props.products} /> ) :
      ( <ListLayout products={this.props.products} /> );

    return layout;
  }
}

export default ExibitionMode;

