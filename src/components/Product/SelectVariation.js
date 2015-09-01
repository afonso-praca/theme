import React from 'react';
import VariationButton from './VariationButton';

class SelectVariation extends React.Component {
  getVariationKey(i) {
      let sortOrder = ['PP','P','M', 'G', 'GG'];
      return sortOrder[i];
  }

  changeAvailability(availability) {
    if (availability > 0) {
      return 'v-dream__size-selector';
    }
    return 'v-dream__size-selector--unavailable';
  }

  render() {
    if (this.props.skus.length <= 1) {
      return null;
    }
    let i=0;
    let groups = this.props.getSkuGroups(this.props.skus, 0);
    return (
      <div className="col-xs-12">
        <h3 className="v-dream__selector__title col-xs-11">{this.props.variation}:</h3>
        <div className="v-dream__size-selector__wrapper col-xs-11">
          {
            Object.keys(groups).map((group) => {
              let isActive = false;
              if (group === this.props.selectedVariation) {
                isActive = true;
              }
              let variationKey = this.getVariationKey(i);
              i++;
                return (
                  <div key={variationKey}>
                    <VariationButton skus={groups[variationKey]} value={variationKey}  displayAlert={this.props.displayAlert} changeVariationState={this.props.changeVariationState}
                                     getSkuGroups={this.props.getSkuGroups} isActive={isActive}/>
                  </div>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default SelectVariation;
