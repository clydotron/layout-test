import React from 'react';
import './ViewSelector.css'

class ViewSelector extends React.Component {

  constructor(props) {
    super(props);

    this.viewOptions = {
        'Roadmap' : 'roadmap',
        'Planning board' : 'planning_board',
        'Parking lot' : 'parking_lot'
    };

    this.state = {
      view: this.viewOptions['Roadmap'],
    }
  }

  getViewClass(viewOption) {
    return (this.state.view === viewOption) ? 'active' : '';
  }

  handViewOptionChange(viewOption) {
    this.setState({view: viewOption});
    //call the listener?

    this.props.onViewSelected(viewOption);
  }

  renderViewOptions() {
    return Object.keys(this.viewOptions).map(viewOption => {
      const viewOptionValue = this.viewOptions[viewOption];
      return <li className={this.getViewClass(viewOptionValue)}
              key={viewOptionValue}
              onClick={this.handViewOptionChange.bind(this,viewOptionValue)}>{viewOption}</li>;
    });
  }

  render() {
    return (
      <div className="ViewSelector">
        <div className="ViewSelector-view-title">
          <h1>{this.state.view}</h1>
        </div>
        <div className="ViewSelector-view-options">
          <ul>
            {this.renderViewOptions()}
          </ul>
        </div>
      </div>

    );
  }
}

export default ViewSelector;