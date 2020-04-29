import React from 'react';
import './TopToolBar.css'

class TopToolBar extends React.Component {

  render() {
    return (
      <div className="TopToolBar">
        <div className="workspace-logo">
          <div className="logo" />
          logo
        </div>
        <div className="workspace-title">
          <h1>{this.props.title}</h1>
        </div>
        <div className="workspace-search">Search
        <i className="fas fa-search"></i>
        </div>
      </div>
    );
  }
}

export default TopToolBar;
