import React, { Component } from "react";
import "./App.scss";

import { ProductList } from "./components/product-list/product-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faSearch);

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      hideSearchBox: true,
      searchTerm: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/products")
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }

  handleChange = e => {
    this.setState({ searchTerm: e.target.value });
  };

  onShowFilter = () => {
    this.setState({ hideSearchBox: !this.state.hideSearchBox });
  };

  render() {
    let { products, searchTerm, hideSearchBox } = this.state;

    products = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="market-inventory__wrapper">
        <header className="market-inventory__header">
          <h1>Market Inventory</h1>
        </header>

        <section className="market-inventory__content">
          <SearchBox
            onSearchTerm={this.handleChange}
            hideSearchBox={hideSearchBox}
            onShowFilter={this.onShowFilter}
          />
          <ProductList products={products} />
        </section>
      </div>
    );
  }
}

export default App;
