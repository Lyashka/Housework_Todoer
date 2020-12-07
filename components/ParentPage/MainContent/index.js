import React from 'react';
import styled from 'styled-components';
import NavigationPanel from './NavigationPanel';
import AddTaskCard from './AddTaskCard';
import CreateTaskCard from './CreateTaskCard';
import EditTaskCard from './EditTaskCard';
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

class MainContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCreateTask: false,
      editTaskId: null,
      tasks: [...this.props.tasks],
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

  createNewTask = (newTask) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask],
    }));
  }

  deleteTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  changeEditCardId = (taskId) => {
    this.setState({
      editTaskId: taskId,
    });
  }

  editTaskCard = (editedTask) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) => {
        if (task.id === editedTask.id) {
          return editedTask;
        } return task;
      }),
    }));
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
          }) => (
            <TaskItem key={id}>
              <EditTaskCard
                taskId={id}
                color={color}
                description={description}
                reward={reward}
                isEditTask={this.state.editTaskId === id}
                deleteTask={this.deleteTask}
                changeEditCardId={this.changeEditCardId}
                editTaskCard={this.editTaskCard}
              />
            </TaskItem>
          ))}
          {this.state.isCreateTask
            ? (
              <TaskItem>
                <CreateTaskCard
                  handleRejectCreateTask={this.handleRejectCreateTask}
                  addTaskToState={this.createNewTask}
                />
              </TaskItem>
            )
            : (
              <TaskItem>
                <AddTaskCard handleCreateTask={this.handleCreateTask} />
              </TaskItem>
            )}
        </Tasks>
      </Content>
    );
  }
}

export default MainContent;
