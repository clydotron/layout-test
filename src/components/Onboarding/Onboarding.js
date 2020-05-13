import React from 'react';
import './Onboarding.css';
import PropTypes from 'prop-types';

class Onboarding extends React.Component {


  renderAddLane() {

    return (
      <div className="contentArea">

        <div className="topzone" >
          <button className="x_button" onClick={this.props.onClose}>x</button>
        </div>
        <div className="drop_target">
          <div className="dropped_item">
            <div className="di_icon_box">
                    <div className="di_icon_svg" />
                  </div>
            <div className="dropped_item_text">
              Add Lane
            </div>
          </div>
        </div>

        <h3>{this.props.content.title}</h3>
        <p>
          {this.props.content.body}
        </p>
        <h5>
          {this.props.content.callToAction}
        </h5>
        <div className="buttonZone">  
          <button className="okButton" onClick={this.props.onClose}>
            {this.props.content.buttonText}
          </button>
        </div>
      </div>
    )
  }

  render() {
    if (!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop">
        <div id="onboarding" className="on left">
          <div className="onboarding-arrow"/>
          <div className="onboarding-inner">
            {this.renderAddLane()}
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
