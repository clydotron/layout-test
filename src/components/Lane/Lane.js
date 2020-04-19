import React from 'react';
import styled from 'styled-components';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import Task from '../Task/Task'
import TaskRow from '../TaskRow/TaskRow';

const Container = styled.div`
  margin-bottom: 8px;
  padding: 0px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2 px;
  width: 800px;
  display: flex;
  flex-direction: column;
  min-height: 80px;
`;

const Title = styled.h3`
  padding: 8px 16px;
  border: 0px;
  margin: 0px 0px 8px 0px;
  text-align: left;


  background-color: ${props => props.bkcolor}
  
`;

const TaskList = styled.div`
display: flex;
flex-direction: row;
`;

class Lane extends React.Component {

  render() {
    return(
      <Draggable draggableId={this.props.lane.id} index={this.props.index} type="lane">
        {(provided,snapshot) => (
          <Container
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
            <Title {...provided.dragHandleProps} bkcolor={this.props.lane.color}>{this.props.lane.title}</Title>
            {this.props.rows.map((row, index) => {
              return <TaskRow key={row.id} id={row.id} tasks={row.tasks} index={index} />
            })}


          </Container>

        )}
      </Draggable>
    )
  }
};
/* <Droppable 
droppableId={this.props.lane.id} 
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
</Droppable> */

export default Lane;