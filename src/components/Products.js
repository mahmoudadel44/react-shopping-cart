import React, { Component } from "react";
import '../styles/Product.css'
import formatCurrency from  '../util'
export default class Products extends Component {
  render() {
    const {products}=this.props
    return (
      <div>
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={"#"+product._id}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button type="button" className="btn btn-primary">Add To Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
