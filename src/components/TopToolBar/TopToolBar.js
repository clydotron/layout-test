import React from 'react';
import './TopToolBar.css'

class TopToolBar extends React.Component {

  render() {
    return (
      <div className="TopToolBar">
        <h1>{this.props.title}</h1>
      </div>
    );
  }
}

export default TopToolBar;
