import React from 'react';
import './RoadMapContainer.css'
import RoadMapWorkArea from './RoadMapWorkArea/RoadMapWorkArea';
import RoadMapTools from './RoadMapTools/RoadMapTools';
import styled from 'styled-components';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../../initial-data';


class RoadMapContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tools: [
        { id: 'tool-1', name: 'Lane', type: 'lane'},
        { id: 'tool-2', name: 'Task', type: 'task'}
      ],
      roadmap: initialData,
    }
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
    
      const newRoadmap = {
        ...this.state.roadmap,
        orderedLanes: newLaneOrder,
      }
      this.setState({roadmap: newRoadmap});
      return;
    }

    const roadmap = this.state.roadmap;

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
  
  render() {
    return (
      <DragDropContext onDragStart={this.onDragStart} onDragEnd={this.onDragEnd}>
        <div className="RoadMapContainer">
          <div className="work-area">
            <RoadMapWorkArea roadmap={this.state.roadmap}/>
          </div>
          <div className="tools-area">
            <RoadMapTools tools={this.state.tools}/>
          </div>
        </div>
      </DragDropContext>
    );
  }
}

export default RoadMapContainer;
