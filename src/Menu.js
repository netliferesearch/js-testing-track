import React, { Component } from "react";
import "./Menu.css";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: false };
    this.toggleMenu = this.toggleMenu.bind(this);
    if (this.props.crash) {
      throw new Error("Crashing here we go!");
    }
  }

  toggleMenu(e) {
    console.log("test");
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <button className="menu-button" onClick={this.toggleMenu}>
          <div className="menu-button__bar" />
          <div className="menu-button__bar" />
          <div className="menu-button__bar" />
        </button>
        {this.state.isToggleOn ? (
          <div className="menu-content">Menu stuff goes here</div>
        ) : null}
      </div>
    );
  }
}

export default Menu;
