import React from 'react';
import './RoadMapTools.css'
import RoadMapTool from '../RoadMapTool';
//import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';


class RoadMapTools extends React.Component {

  render() {
    return (
      <Droppable droppableId="tool-area" type="lane" >
        {(provided) => (
          <div 
            className="RoadMapTools"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h3>tools</h3>
            {this.props.tools.map((tool,index) => (
              <RoadMapTool key={tool.id} tool={tool} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default RoadMapTools;
