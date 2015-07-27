import React from 'react';
import { connectToStores, dispatcher } from 'sdk';
import Shelf from '../components/search/Shelf';
import { PureRenderMixin } from 'react/lib/ReactComponentWithPureRenderMixin';

let config1 = {
  title: 'All',
  search: {
    id: 'home-shelf-1'
  }
};

const stores = [
  dispatcher.stores.SearchStore,
  dispatcher.stores.ShopStore,
  dispatcher.stores.ComponentStore
];

let Home = React.createClass({
  mixins: [ PureRenderMixin ],

  componentDidMount() {
    const accountName = this.props.ShopStore.get('accountName');

    const search1 = this.props.SearchStore.get(config1.search.id);
    if (!search1 || !search1.results) {
      config1.search.accountName = accountName;
      dispatcher.actions.SearchActions.requestSearch(config1.search);
    }
  },

  render() {
    let Banner = this.props.ComponentStore.getIn(['Banner', 'constructor']);
    let banner;
    if (Banner) {
      banner = <Banner id="home-shelf-1"/>;
    }

    return (
      <div>
        {banner}
        <Shelf {...config1} />
      </div>
    );
  }
});

export default connectToStores(stores)(Home);
