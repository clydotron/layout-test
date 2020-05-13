import React from 'react'
import './Tooltip.css';

class Tooltip extends React.Component
{
	
  render()
  {
  	let {state} = this;
    return <div id="tooltip" className="on bottom">
            <div className="tooltip-arrow"></div><div className="tooltip-inner">ToolTip Component</div>
           </div>;
  }
  componentDidMount()
  {
  	
  }
  componentWillUnmount()
  {
  	
	}
}

export default Tooltip;