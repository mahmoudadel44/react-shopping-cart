import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    const { count,size,sort,filterProducts,sortProducts } = this.props;
    return (
      <div className="filterContainer">
        <div className="container">
          <div className="row mt-3">
            <div className="col-md-3 text-right ml-5">{count+" "}Products</div>
            <div className="col-md-3 text-right d-flex flex-row ml-3">
              order
              <select className="form-control ml-3" value={sort} onChange={sortProducts}>
                <option value="">Latest</option>
                <option value="lowest">Lowest</option>
                <option value="heighest">Heighest</option>
              </select>
            </div>
            <div className="col-md-3 text-right d-flex flex-row  ml-5">
              filter
              <select className="form-control ml-3" value={size} onChange={filterProducts}>
                <option value="">All</option>
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
