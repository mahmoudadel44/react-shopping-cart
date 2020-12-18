import React from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
  sortProducts = (e) => {
    const sort = e.target.value;
    console.log(e.target.value);
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "heighest"
          ? a.price < b.price
            ? 1
            : -1
          : a._id > b._id
          ? 1
          : -1
      ),
    }));
  };
  filterProducts = (e) => {
    console.log(e.target.value);
    if (e.target.value === "") {
      this.setState({ size: e.target.value, products: data.products });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
          (product) => product.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    }
  };
  render() {
    return (
      <div>
        <header>
          <a href="/">React Shooping Cart</a>
        </header>
        <div className="container">
          <main>
            <div className="row">
              <div className="col-md-9">
                <div className="main">
                  <Filter
                    count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                  />

                  <Products products={this.state.products} />
                </div>
              </div>
              <div className="col-md-3">
                <div className="sidebar">Cart Item</div>
              </div>
            </div>
          </main>
        </div>
        <footer>All Right reserved</footer>
      </div>
    );
  }
}

export default App;
