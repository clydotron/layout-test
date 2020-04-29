import React from 'react';
import './RoadMapContainer.css'
import RoadMapWorkArea from './RoadMapWorkArea/RoadMapWorkArea';
import RoadMapTools from './RoadMapTools/RoadMapTools';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../../initial-data';


class RoadMapContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tools: [
        { id: 'tool-1', name: 'Add Lane', type: 'lane'},
        { id: 'tool-2', name: 'Add Task', type: 'task'}
      ],
      roadmap: initialData,
      nextId: {
        lane: 5,
        task: 10,
        row: 10,
      },
      nextLaneId: 15,
      nextTaskId: 100,
      nextRowId: 10
    }
  }

  createNewLane = () => {

    //we are going to create a new lane!
    const nextLaneId = this.state.nextLaneId;
    const newLaneId = `lane-${nextLaneId}`;
    this.setState({nextLaneId: nextLaneId+1 });

    const newLane = {
      id: newLaneId,
      title: "New lane",
      color: 'orange',
      rowIds: [],
    };

    //should i create the row here?

    //const lanes = this.state.roadmap.lanes;
    //lanes[newLaneId] = newLane;

    return newLane;
  }

  createNewTask = () => {

    const nextTaskId = this.state.nextTaskId;
    const newTaskId = `task-${nextTaskId}`;
    this.setState({nextTaskId: nextTaskId+1 });

    const newTask = {
      id: newTaskId,
      title: "New task",
      color: 'red'
    }

    // if we do this here, we need to call setState... 
    //const tasks = roadmap.tasks;
    //tasks[newTaskId] = newTask;

    return newTask;
  }

  createNewRow = () => {

    const nextRowId = this.state.nextRowId;
    const newRowId = `row-${nextRowId}`;
    this.setState({nextRowId: nextRowId+1 });

    const newRow = {
      id: newRowId,
      taskIds: []
    }

    // const roadmap = this.state.roadmap;

    // const rows = roadmap.rows;
    // const newRoadmap = {
    //   ...roadmap,
    //   rows: {
    //     ...roadmap.rows,
    //     [newRowId]: newRow,         
    //   }
    // }
    // this.setState({roadmap: newRoadmap});

    // console.log("new row");
    // console.log(newRoadmap);

    return newRow;
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

    // this is quasi dangerous, as it is a copy, so as long as we only use this
    // or not at all
    //const roadmap = this.state.roadmap;

    //need a more robust name
    if (type === 'lane' && source.droppableId === 'tool-area-lane') {
      console.log("new lane!");

      const newLane = this.createNewLane();

      const lanes = this.state.roadmap.lanes;
      lanes[newLane.id] = newLane;

      const newLaneOrder = Array.from(this.state.roadmap.orderedLanes);
      newLaneOrder.splice(destination.index, 0, newLane.id);
      
      const newRow = this.createNewRow(); 
      newLane.rowIds = [newRow.id];

      const newRoadmap = {
        ...this.state.roadmap,
        orderedLanes: newLaneOrder,
        lanes: lanes,
        rows: {
          ...this.state.roadmap.rows,
          [newRow.id]: newRow,
        }
      };
      this.setState({roadmap: newRoadmap});

      return;
    }

    if ( type === 'task' && source.droppableId === 'tool-area-task') {
      console.log("new task!");

      const newTask = this.createNewTask();
      
      const tasks = this.state.roadmap.tasks;
      tasks[newTask.id] = newTask;

      const newRow = this.state.roadmap.rows[destination.droppableId];
      const newTaskRow = Array.from(newRow.taskIds);
      newTaskRow.splice(destination.index, 0, newTask.id);
    
      newRow.taskIds = newTaskRow;

      const newRoadmap = {
        ...this.state.roadmap,
        rows: {
          ...this.state.roadmap.rows,
          [newRow.id]: newRow,         
        }
      }
      this.setState({roadmap: newRoadmap});

      //determine if we need to add another row... (how do we determine the parent)
      //
      return;
    }


    // if this is a lane, reorder the lanes:
    if (type === 'lane') {
      const roadmap = this.state.roadmap;

      const newLaneOrder = Array.from(roadmap.orderedLanes);
      newLaneOrder.splice(source.index,1);
      newLaneOrder.splice(destination.index, 0, draggableId);
    
      const newRoadmap = {
        ...roadmap,
        orderedLanes: newLaneOrder,
      }
      this.setState({roadmap: newRoadmap});
      return;
    }

    if (type === 'task') {
      const roadmap = this.state.roadmap;

      //check to see if this is a re-order:
      const srcRow = roadmap.rows[source.droppableId];
      const dstRow = roadmap.rows[destination.droppableId];
      
      if ( srcRow === dstRow ) {

        console.log("same row");
        const newTaskIds = Array.from(srcRow.taskIds);
        newTaskIds.splice(source.index,1);
        newTaskIds.splice(destination.index, 0, draggableId);
      
        const newRow = {
          ...srcRow,
          taskIds: newTaskIds,
        }
     
        const newRoadmap = {
          ...roadmap,
          rows: {
            ...roadmap.rows,
            [newRow.id]: newRow,         
          }
        }
        console.log(newRoadmap)
        this.setState({roadmap: newRoadmap});
      }
      else {
        console.log("different!");
        console.log(this.state.roadmap);

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

        const newRoadmap = {
          ...this.state.roadmap,
          rows: {
            ...this.state.roadmap.rows,
            [newSrcRow.id]: newSrcRow,
            [newDstRow.id]: newDstRow,      
          }
        }
        console.log("different! -- AFTER");
        console.log(newRoadmap);
             
        this.setState({roadmap: newRoadmap});

        console.log("different! -- AFTER");
        console.log(this.state.roadmap);
    
        
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
