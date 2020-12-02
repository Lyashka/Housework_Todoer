/* eslint-disable array-callback-return */
import React from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import TaskCard from './TaskCard';
import AddTaskCard from './AddTaskCard';
import CreateTaskCard from './CreateTaskCard';
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

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreateTask: false,
      tasks: [...tasks],
    };
  }

  handleCreateTask = () => {
    this.setState({
      isCreateTask: true,
    });
  }

  handleRejectCreateTask = () => {
    this.setState({
      isCreateTask: false,
    });
  }

  render() {
    return (
      <Content>
        <NavigationPanel />
        <Tasks>
          {this.state.tasks.map(({
            id,
            description,
            reward,
            color,
          }) => <TaskCard key={id} color={color} description={description} reward={reward} />)}
          {this.state.isCreateTask
            ? (
              <CreateTaskCard
                handleRejectCreateTask={this.handleRejectCreateTask}
              />
            )
            : <AddTaskCard handleCreateTask={this.handleCreateTask} />}
        </Tasks>
      </Content>
    );
  }
}

export default MainContent;
