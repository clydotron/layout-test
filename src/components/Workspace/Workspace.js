import React, { Component } from 'react'
import ViewSelector from '../ViewSelector/ViewSelector.js'
import RoadMapContainer from '../RoadMap/RoadMapContainer.js';
import PlanningBoardView from '../PlanningBoardView/PlanningBoardView.js';
import ParkingLotView from '../ParkingLotView/ParkingLotView.js';

export class Workspace extends Component {

  constructor(props) {
    super(props);

    this.state = {currentView: 'roadmap'};

    this.handleViewSelected = this.handleViewSelected.bind(this);
  }

  handleViewSelected = (view) => {
    console.log(view);
    this.setState({currentView: view});
  }

  renderCurrentView() {
    let view;

    switch(this.state.currentView) {

      case 'roadmap':
        return <RoadMapContainer/>;

      case 'planning_board':
        return <PlanningBoardView />;

      case 'parking_lot':
        return <ParkingLotView />;
          break;

          //default error
    }

    return(
      {view}
    )
  }

  render() {
    return (
      <div className="Workspace">
        <div className="Workspace-viewSelector">
          <ViewSelector onViewSelected={this.handleViewSelected}/>
        </div>

        <div>
          {this.renderCurrentView()}
        </div>
      </div>
    )
  }
}

export default Workspace
