import React from 'react';
import Sidebar from './Sidebar.jsx';
import BoardContainer from './BoardContainer.jsx';

const MainContainer = props => (
  <div id="main">
    <Sidebar />
    <BoardContainer />
  </div>
);


export default MainContainer;
