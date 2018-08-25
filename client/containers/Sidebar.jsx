import React, { Component } from "react";
import { connect } from "react-redux";

//CHILDREN
import BoardSelector from "../components/BoardSelector.jsx";
import SaveBoard from "../components/SaveBoard.jsx";
import Export from "../components/Export.jsx";
import Import from "../components/Import.jsx";
import RemoveBubble from "../components/RemoveBubble.jsx";
import { Well } from "react-bootstrap";

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
          <Export />
          <Import />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
