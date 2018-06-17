import React, { Component } from 'react';

class ProductItem extends Component {
  render() {
    const { name, price } = this.props;

    return (
      <div>
        <span>{product.name}</span>
        {` | `} 
        <span>{product.price}</span>
        {` | `}
        <button>Delete</button>
      </div>
    );
  }
}

export default ProductItem;
