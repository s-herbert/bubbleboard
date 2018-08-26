import React, { Component } from "react";
import { connect } from "react-redux";
import { Well } from "react-bootstrap";

//CHILDREN
import InputField from "../components/InputField.jsx";
import * as actions from "../actions/actions";

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {} = this.props;
    return (
      <Well id="sidebar">
        <h2>bbblbrd</h2>
        <InputField
          onSubmitHandler={this.props.onSubmit}
          onChangeHandler={this.props.onChange}
        />
      </Well>
    );
  }
}

const mapStateToProps = store => ({
  //provide pertinent state here
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  onSubmit: event => {
    console.log("event.target: ", event.target);
    event.preventDefault();
    dispatch(actions.loadJSON());
  },
  onChange: event => {
    console.log("changing");

    dispatch(actions.inputChange(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
