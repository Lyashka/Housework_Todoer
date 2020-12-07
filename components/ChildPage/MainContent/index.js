import React from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import PerformTaskCard from './PerformTaskCard';
import RowContainer from '../../containers/rowContainer';
import ColContainer from '../../containers/colContainer';

const Content = styled.section`
  ${ColContainer};
  width: 70%;
  height: 75vh;
`;

const Tasks = styled.ul`
  ${RowContainer};
  align-content: start;
  margin: 0 -10px;
  width: 100%;
  height: 500px;
  list-style-type: none;
  flex-wrap: wrap;
  overflow-y: auto;
`;

const TaskItem = styled.li`
  position: relative;
  height: 200px;
  margin: 0 10px;
`;

function MainContent(props) {
  return (
    <Content>
      <NavigationPanel />
      <Tasks>
        {props.tasks.map(({
          id,
          description,
          reward,
          color,
        }) => (
          <TaskItem key={id}>
            <PerformTaskCard
              taskId={id}
              description={description}
              reward={reward}
              color={color}
              handlerOfCompletedTask={props.handlerOfCompletedTask}
              handlerForAddCoins={props.handlerForAddCoins}
              handlerForSaveCompletedTask={props.handlerForSaveCompletedTask}
            />
          </TaskItem>
        ))}
      </Tasks>
    </Content>
  );
}

export default MainContent;
