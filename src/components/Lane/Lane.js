import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
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

  background: repeating-linear-gradient(
    to right,
    #ffffff,
    #ffffff 124px,
    #d8d8d8 124px,
    #d8d8d8 125px
  );
`;

const Title = styled.h3`
  padding: 8px 16px;
  border: 0px;
  margin: 0px 0px 8px 0px;
  text-align: left;


  background-color: ${props => props.bkcolor}
  
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

export default Lane;