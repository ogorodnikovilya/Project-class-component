import { Component } from "react";
import { buttons } from "../buttons";
import "./style.scss";

class OneCar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countProduc: this.props.element.count,
      increment: 0,
      isClick: false,
    };
  };

  changeNumber = (e, method) => {
    const { increment, countProduc, isClick } = this.state;
    const { cost } = this.props.element;
    e.stopPropagation();
    if (method === "increment" && increment >= 0 && countProduc > 0 && isClick) {
      this.setState({ increment: increment + 1 });
      this.setState({ countProduc: countProduc - 1 });
      this.props.changePrice(method, cost);
    }
    if (method === "decrement" && increment >= 1 && countProduc >= 0 && isClick) {
      this.setState({ increment: increment - 1 });
      this.setState({ countProduc: countProduc + 1 });
      this.props.changePrice(method, cost);
    };
  };

  selectProduct = () => {
    const { increment, isClick, countProduc } = this.state;
    const { cost } = this.props.element;
    if (isClick) {
      this.setState({ isClick: false });
      const clearCost = increment * cost;
      this.props.changeTotalCost(clearCost);
      this.setState({ countProduc: countProduc + increment });
      this.setState({ increment: 0 });
    } else {
      this.setState({ isClick: true });
    };
  };

  render() {
    const { title, cost, img } = this.props.element;
    const { minus, plus } = buttons;
    const { isClick, countProduc } = this.state;

    return (
      <div
        onClick={() => this.selectProduct()}
        className={isClick ? "product__block clicked" : "product__block"}
      >
        <div className="product__title">
          <img src={img} alt="" className="images" />
          <h1>{title}</h1>
        </div>
        <div className="product__cost">
          Цена: {cost}р
        </div>
        <div className="product__count">
          Всего: {countProduc}
        </div>

        <div className="product__icons">
          <div onClick={(e) => this.changeNumber(e, "decrement")}>
            {minus}
          </div>
          <p>{this.state.increment}</p>
          <div onClick={(e) => this.changeNumber(e, "increment")}>
            {plus}
          </div>
        </div>
      </div>
    );
  };
};
export default OneCar;
