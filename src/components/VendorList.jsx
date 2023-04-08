import React, { Component } from "react";
// import { Form } from "formik";
import "./css/VendorList.css";
import VendorItems from "./VendorItems";

class VendorList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="vendorListMain">
        <div className="header">
          <form className="vendorList" onSubmit={this.addItem}>
            <input
              ref={(a) => (this._inputElement = a)}
              placeholder="enter vendor"
            ></input>
            <button type="submit">add</button>
          </form>
        <VendorItems entries={this.state.items} />
        </div>
      </div>
    );
  }
}

export default VendorList;
