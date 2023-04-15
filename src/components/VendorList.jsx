import React, { Component } from "react";
import VendorItems from "./VendorItems";
import "./css/VendorsList.css";

class VendorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    let itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now(),
      });

      this.setState({
        items: itemArray,
      });

      this._inputElement.value = "";
    }
    console.log(itemArray);
    e.preventDefault();
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    return (
      <div className="vendorListMain">
        <div className="vendList">
          <input
            ref={(a) => (this._inputElement = a)}
            placeholder="enter task"
          ></input>
          <button type="button" onClick={this.addItem} >
            add
          </button>
        </div>
        <VendorItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default VendorList;
