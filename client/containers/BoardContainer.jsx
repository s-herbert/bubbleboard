import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';
import BubbleBoard from '../components/BubbleBoard.jsx'



class BoardContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextState,nextProps){
    console.log('sCompUp? next state: ', nextState);
    return nextState.hasNewInput;
  }

  componentDidUpdate(prevProps,prevState){
    console.log('updated board container!');
  }

  render() {
    return(
      <Well id="boardContainer">
        <BubbleBoard object = {this.props.inputData} name={this.props.boardName}/>
      </Well>
    )
  }


}

const mapStateToProps = store => ({
  //provide pertinent state here
  inputData: store.bubble.inputJSON,
  hasNewInput: store.bubble.renderBoard,
  boardName: store.bubble.boardName,
});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

