import React from 'react';
import './WorkArea.css'
import RoadMapContainer from '../RoadMap/RoadMapContainer'

class WorkArea extends React.Component {

  render() {
    return (
      <div className="WorkAreaContainer">
        <RoadMapContainer />
      </div>
    );
  }
}

export default WorkArea;
