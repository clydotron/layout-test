import React from 'react';
import './RoadMapWorkArea.css'
import styled from 'styled-components';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import initialData from '../../../initial-data';
import Lane from '../../Lane/Lane'

const Container = styled.div`
  padding 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white' )};
  flex-grow: 1;
  min-height: 300px;

`;


class RoadMapWorkArea extends React.Component {

  constructor(props) {
    super(props);

    this.state = initialData;
  }

  onDragEnd = (result) => {
    console.log(result);

    const { destination, source, draggableId, type } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    if (type === 'lane' && source.draggableId === 'tool-area') {

      console.log("new lane!");

      //we are going to create a new lane!
    }

    // if this is a lane, reorder the lanes:
    if (type === 'lane') {
  
      const newLaneOrder = Array.from(this.state.orderedLanes);
      newLaneOrder.splice(source.index,1);
      newLaneOrder.splice(destination.index, 0, draggableId);
    
      const newState = {
        ...this.state,
        orderedLanes: newLaneOrder,
      }
      this.setState(newState);
      return;
    }

    if (type === 'task') {
      //check to see if this is a re-order:
      const srcRow = this.state.rows[source.droppableId];
      const dstRow = this.state.rows[destination.droppableId];
      
      if ( srcRow === dstRow ) {

        console.log("same row");
        const newTaskIds = Array.from(srcRow.taskIds);
        newTaskIds.splice(source.index,1);
        newTaskIds.splice(destination.index, 0, draggableId);
      
        const newRow = {
          ...srcRow,
          taskIds: newTaskIds,
        }
  
        console.log(newRow);

        const newState = {
          ...this.state,
          rows: {
            ...this.state.rows,
            [newRow.id]: newRow,
          }
        }

        this.setState(newState);
        //this.setState({rows: {}})
      }
      else {
        console.log("different!");
        const newSrcTaskIds = Array.from(srcRow.taskIds);
        newSrcTaskIds.splice(source.index,1);

        const newDstTaskIds = Array.from(dstRow.taskIds);
        newDstTaskIds.splice(destination.index, 0, draggableId);

        const newSrcRow = {
          ...srcRow,
          taskIds: newSrcTaskIds,
        }
        const newDstRow = {
          ...dstRow,
          taskIds: newDstTaskIds,
        }

        const newState = {
          ...this.state,
          rows: {
            ...this.state.columns,
            [newSrcRow.id]: newSrcRow,
            [newDstRow.id]: newDstRow,
          }
        }
  
        this.setState(newState);


        //validate that rows work correctly:
      }
    }
    
  }
  

  onDragStart = start => {
    // store where the start originated:
    // if from the tool bar, then we will need to clone the object (since we want the original to stay put)
  }


  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
      <Droppable droppableId="roadmap-lanes" type="lane">
        {(provided,snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.state.orderedLanes.map((laneId, index) => {
              const lane = this.state.lanes[laneId];
              const tasks = lane.taskIds.map(taskId => this.state.tasks[taskId]);

              const rows = lane.rowIds.map(rowId => {
                const rowInfo = this.state.rows[rowId];
                const tasks = rowInfo.taskIds.map(taskId => this.state.tasks[taskId]);          
                return {id:rowId, tasks:tasks};
              });

              return <Lane key={lane.id} lane={lane} tasks={tasks} rows={rows} index={index}/>;
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
      </DragDropContext>
    );
  }
}


export default RoadMapWorkArea;
