import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';
import BubbleBoard from '../components/BubbleBoard.jsx'



class BoardContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Well id="boardContainer">
        <BubbleBoard object = {this.props.inputData} name={'Test Data'}/>
      </Well>
    )
  }
}

BoardContainer.propTypes = {};

const mapStateToProps = store => ({
  //provide pertinent state here
  inputData: store.bubble.inputJSON
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

