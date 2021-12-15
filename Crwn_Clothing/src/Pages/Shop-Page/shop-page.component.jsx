import React from 'react';

import PreviewCollection from '../../Components/Collection-Preview/collection-preview.component';
import SHOP_DATA from './shop.data';

import './shop-page.styles.scss';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherSectionProps }) => (
          <PreviewCollection key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
