import { Component } from "react";
import { logo } from "../../constants";
import "./style.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      findProduct: "",
    };
  }
  render() {
    const { totalCost } = this.props;
    const { findProduct } = this.state;
    return (
      <div className="header">
        <img className="header__logo" src={logo} alt="header_logo" />
        <input
          className="header__input"
          type="text"
          placeholder="Название товара"
          onChange={(e) => this.setState({ findProduct: e.target.value })}
        />
        <button
          className="header__button"
          onClick={() => this.props.findProductsInCollection(findProduct)}>Поиск</button>
        <div className="header__text">
          <p>Общая стоимость выбранных товаров: {totalCost}р</p>
        </div>
      </div>
    );
  }
}
export default Header;
