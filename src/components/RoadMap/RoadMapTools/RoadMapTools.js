import React from 'react';
import './RoadMapTools.css'
import RoadMapTool from '../RoadMapTool';

class RoadMapTools extends React.Component {

  render() {
    return (
      <div className="tool_area">
        {this.props.tools.map((tool,index) => (
          <RoadMapTool key={tool.id} tool={tool} index={index} />
        ))}
      </div>
    );
  }
}

export default RoadMapTools;
