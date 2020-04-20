import React from 'react'
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task'


const TaskList = styled.div`
  display: flex;
  flex-direction: row;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'lightgreen' : 'yellow' )};
  flex-grow: 1;
  min-height: 2px;

`;

// task rows are
export default class TaskRow extends React.Component {

  render() {
    return (
      <Droppable 
        droppableId={this.props.id} 
        direction="horizontal" 
        type="task"
      >
        {(provided,snapshot) => (
          <TaskList
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.props.tasks.map((task, index) => {
              return <Task key={task.id} task={task} index={index}/>
            })}
            {provided.placeholder}
          </TaskList>
        )}
      </Droppable>
    )
  }
}
