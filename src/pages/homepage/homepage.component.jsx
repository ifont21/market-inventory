import React from "react";
import "./homepage.styles.scss";

export class HomePage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      hideSearchBox: true,
      searchTerm: ""
    };
  }

  componentDidMount() {
    // fetch("http://localhost:3001/products")
    //   .then(response => response.json())
    //   .then(products => this.setState({ products }));
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
      <div className="homepage__wrapper">
        <span className="homepage__main-text">Plan Your Market Better!</span>
        <ul className="homepage__steps">
          <li>
            <span>1.</span>Start creating products
          </li>
          <li>
            <span>2.</span>Keep updating the product status
          </li>
          <li>
            <span>3.</span>Export your List
          </li>
        </ul>
      </div>
    );
  }
}
