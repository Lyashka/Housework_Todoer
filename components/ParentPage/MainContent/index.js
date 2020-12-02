/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import TaskCard from './TaskCard';
import AddTaskCard from './AddTaskCard';
import RowContainer from '../../containers/rowContainer';
import ColContainer from '../../containers/colContainer';
import { tasks } from '../../../const';

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

function MainContent() {
  return (
    <Content>
      <NavigationPanel />
      <Tasks>
        {tasks.map(({
          id,
          description,
          reward,
          color,
        }) => <TaskCard key={id} color={color} description={description} reward={reward} />)}
        <AddTaskCard />
      </Tasks>
    </Content>
  );
}

export default MainContent;
