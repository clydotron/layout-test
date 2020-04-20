import React from 'react';
//import './RoadMapTool.css'
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin: 8px;
  background-color: ${props => props.isDragging ? 'lightblue' : 'white'};
`;

class RoadMapTool extends React.Component {

render() {  
  const dropId = `tool-area-${this.props.tool.type}`;

  return(
    <Droppable droppableId={dropId} type={this.props.tool.type} >
      {(provided) => (
        <div 
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <Draggable draggableId={this.props.tool.id} index={this.props.index} type={this.props.type}>
              {(provided,snapshot) => (
                <Container
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  isDragging={snapshot.isDragging}
                >
                  {this.props.tool.name}

                </Container>
              )}
            </Draggable>
            {provided.placeholder}
          </div>
      )}
    </Droppable>
  );
}
}
export default RoadMapTool;
/* <Droppable droppableId="tool-area" type={this.props.type} >
{(provided) => (
  <div 
    ref={provided.innerRef}
    {...provided.droppableProps}
  >
    <Draggable draggableId={this.props.tool.id} index={this.props.index} type={this.props.type}>
        {(provided,snapshot) => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            {this.props.tool.name}

          </Container>
        )}
      </Draggable>
      {provided.placeholder}
    </div>
)}
</Droppable> */

/*
          <Draggable draggableId={this.props.tool.id} index={this.props.index} type={this.props.type}>
              {(provided,snapshot) => (
                <Container
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}
                  isDragging={snapshot.isDragging}
                >
                  {this.props.tool.name}
  
                </Container>
              )}
            </Draggable>


*/