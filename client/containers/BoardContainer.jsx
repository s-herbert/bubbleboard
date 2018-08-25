import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';
import BubbleBoard from '../components/BubbleBoard.jsx';

let myObject = {
  'of': {heaven: 'tongues'},
  'are': 'fencing',
  'too': {'many': ['leaves', {'in the':'city'}]},
  'a': {
    week: {
      'of': {heaven: 'tongues'},
      'are': 'fencing',
      'too': {'many': ['leaves', {'in the':{
        'of': {heaven: 'tongues'},
        'are': 'fencing',
        'too': {'many': ['leaves', {'in the':'city'}]},
        'a': {
          week: 'is',
          such: {a: {long: {time: 'eras', rot:'like nature'}}}
        }
      }}]},
      'a': {
        week: 'is',
        such: {a: {long: {time: 'eras', rot:'like nature'}}}
      }
    },
    such: {a: {long: {time: 'eras', rot:'like nature'}}}
  }
}


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

});

const mapDispatchToProps = dispatch => ({
  // create functions that will dispatch action creators
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardContainer);

