import React, { Component } from "react";

class Input extends Component {
  inputRef = React.createRef();
  onSubmit = (e) => {
    // e = > input.value
    e.preventDefault(); // preventDefault = > input.value를 유지해준다. preventDefault를 안해줄 시 유지가 되지 않고 사라진다.
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);
    this.inputRef.current.value = "";
    this.inputRef.current.focus();
  };
  render() {
    return (
      <>
        <form className="add-form" onSubmit={this.onSubmit}>
          <input
            ref={this.inputRef}
            className="add-input"
            type="text"
            placeholder="Habit"
          />
          <button className="add-button">Add</button>
        </form>
      </>
    );
  }
}

export default Input;
