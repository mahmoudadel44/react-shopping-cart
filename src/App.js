import React from "react";
import "./App.css";
import data from "./data.json";
import Products from './components/Products'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: "",
      sort: "",
    };
  }
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
              <Products products={this.state.products}/>
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
