import OneProduct from "../OneCar/OneCar";
import Header from "../Header/Header";
import { Component } from "react";
import { list } from "../../constants";
// import _ from 'underscore'
import "./style.scss";

class SectionApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: list,
      againCollection: list,
      totalCost: 0,
    };
  };

  changePrice = (method, val) => {
    const { totalCost } = this.state;
    method === "increment"
      ? this.setState({ totalCost: totalCost + val })
      : this.setState({ totalCost: totalCost - val });
  };

  changeTotalCost = (val) => {
    const { totalCost } = this.state;
    this.setState({ totalCost: totalCost - val });
  };

  findProductsInCollection = (name) => {
    const { collection, againCollection } = this.state;
    let changeList = collection;
    if (name === "") {
      this.setState({ collection: againCollection });
    } else {
      changeList = changeList.filter((element) => !element.title.toLowerCase().indexOf(name.toLowerCase()));
      this.setState({ collection: changeList });
    };
  };

  render() {
    const { totalCost, isClick } = this.state;
    return (
      <div>
        <Header totalCost={totalCost} findProductsInCollection={this.findProductsInCollection} />
        <div className="list">
          {this.state.collection.map((element, index) => (
            <div key={index} className="product">
              <OneProduct
                element={element}
                index={index}
                totalCost={this.setState}
                changePrice={this.changePrice}
                isClick={isClick}
                changeStyle={this.changeStyle}
                changeTotalCost={this.changeTotalCost}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
};
export default SectionApp;
