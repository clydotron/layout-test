import React from 'react';
import './Onboarding.css';
import PropTypes from 'prop-types';

class Onboarding extends React.Component {

  constructor(props) {
    super(props);

    const addLane = {
      title: "We'll start with a lane",
      body: "Lanes represent high level categories, such as teams, product lines, or strategic initiatives. Add a color and description to your lane to communicate details to stakeholders.";
      callToAction: "Drag and drop a lane to get started",
      buttonText: "Got it"
    };

    const addTask = {
      title: "Awesome! Now let's add few bars.",
      body: "Bars are your specific initiative. Use them to represent your epics, projects, or tasks, and provide an at a glance view of priority, relationships and progress.",
      callToAction: "Drag and drop a bar to get started",
      buttonText: "Got it"
    }
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div className="onboarding">
          {this.props.children}

          <div className="footer">
            <button onClick={this.props.onClose}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Onboarding.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
}
export default Onboarding;
