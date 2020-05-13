import React from 'react';
import '../../index.css';
import './TopToolBar.css';


class TopToolBar extends React.Component {

  render() {
    return (
      <div className="TopToolBar">
        <div className="workspace-logo">
          <div className="logo" />
          logo
        </div>
        <div className="workspace-title">
          {this.props.title}
        </div>
        <div className="workspace-search">Search
        
        <i className="fas fa-search"></i>
        </div>
      </div>
    );
  }
}

export default TopToolBar;
