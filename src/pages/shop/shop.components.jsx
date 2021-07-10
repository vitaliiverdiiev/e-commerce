import React from "react";

import SHOP_DATA from "./shop.data";

import CollectionPreview from "../../components/preview-collection/collection-preview.component";

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collection: SHOP_DATA,
    };
  }
  render() {
    const { collection } = this.state;
    return (
      <div className="shop-page">
        {collection.map(({ id, ...otherProps }) => (
          <CollectionPreview key={collection.id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
