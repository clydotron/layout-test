import React from 'react';
import './ProductToolBar.css'

class ProductToolBar extends React.Component {

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

console.log(props);

  }
  getViewClass(viewOption) {
    return (this.state.view === viewOption) ? 'active' : '';
  }

  handViewOptionChange(viewOption) {
    this.setState({view: viewOption});
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
      <div className="ProductToolBar">
        <div className="ProductToolBar-view-title">
          <h1>{this.props.title}</h1>
        </div>

        <div className="ProductToolBar-view-options">
          <ul>
            {this.renderViewOptions()}
          </ul>
        </div>
      </div>

    );
  }
}

export default ProductToolBar;
