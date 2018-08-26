import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';
import BubbleBoard from '../components/BubbleBoard.jsx';
const myObject = {0: {'hello':'sup'}}
class BoardContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Well id="boardContainer">
        <h1>BOARD CONTAINER</h1>
        <BubbleBoard object = {myObject}/>
      </Well>
    )
  }
}

BoardContainer.propTypes = {};

const mapStateToProps = store => ({
  //provide pertinent state here
  inputData: store.bubble.inputJSON,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  onSubmit: (event) =>{
    event.preventDefault();
    dispatch(actions.importJSON(event.target.value))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

