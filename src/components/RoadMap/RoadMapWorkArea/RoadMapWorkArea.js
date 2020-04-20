import React from 'react';
import './RoadMapWorkArea.css'
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Lane from '../../Lane/Lane'

const Container = styled.div`
  padding 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : 'white' )};
  flex-grow: 1;
  min-height: 300px;
`;

class RoadMapWorkArea extends React.Component {

  render() {

    return (
      <Droppable droppableId="roadmap-lanes" type="lane">
        {(provided,snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {this.props.roadmap.orderedLanes.map((laneId, index) => {
              const lane = this.props.roadmap.lanes[laneId];
              const rows = lane.rowIds.map(rowId => {
                const rowInfo = this.props.roadmap.rows[rowId];
                const tasks = rowInfo.taskIds.map(taskId => this.props.roadmap.tasks[taskId]);          
                return {id:rowId, tasks:tasks};
              });

              return <Lane key={lane.id} lane={lane} rows={rows} index={index}/>;
            })}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>

    );
  }
}


export default RoadMapWorkArea;
