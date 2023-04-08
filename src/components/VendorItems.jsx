import React, { Component } from "react";

class VendorItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>;
  }

  render() {
    const vendorEntries = this.props.entries;
    const listItems = vendorEntries.map(this.createTasks);

    return <ul className="theList">{listItems}</ul>;
  }
}

export default VendorItems;
