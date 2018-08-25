import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';

class BoardContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Well id="boardContainer">
        <h1>BOARD CONTAINER</h1>
        <text>{"<BubbleBoard />"} </text>
      </Well>
    )
  }
}

BoardContainer.propTypes = {};

const mapStateToProps = store => ({
  //provide pertinent state here

});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

