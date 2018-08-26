import React, { Component } from "react";
import { connect } from "react-redux";

//CHILDREN
import BoardSelector from "../components/BoardSelector.jsx";
import SaveBoard from "../components/SaveBoard.jsx";
import Export from "../components/Export.jsx";
import Import from "../components/Import.jsx";
import RemoveBubble from "../components/RemoveBubble.jsx";
import { Well } from "react-bootstrap";
import TextInput from '../components/textInput.jsx';
import * as actions from '../actions/actions';



class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {} = this.props;
    return (
  
        <Well id="sidebar">
          <h2>SIDEBAR</h2>
          <BoardSelector />
          <SaveBoard />
          <TextInput onSubmitHandler = {this.props.onSubmit} onChangeHandler = {this.props.onChange}/>
          <Export />
          <RemoveBubble />
        </Well>

    );
  }
}

const mapStateToProps = store => ({
  //provide pertinent state here
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  onSubmit: (event) =>{
    console.log('event.target: ', event.target);
    event.preventDefault();
    dispatch(actions.loadJSON())
  },
  onChange: (event) =>{
    console.log('changing');
    dispatch(actions.inputChange(event.target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
