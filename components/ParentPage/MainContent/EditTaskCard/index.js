import React from 'react';
import styled from 'styled-components';
import TaskCard from '../TaskCard';
import Form from '../Form';

const ContainerEditTask = styled.section`
  position: relative;
  width: 180px;
  border-radius: 8px;
  box-shadow: -2px 4px 10px #00000045;
  z-index: 99999;
`;

class EditTaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.taskId = this.props.taskId;
  }

  handleOpenTaskCardForEdit = () => {
    this.props.changeEditCardId(this.taskId);
  }

  handleRejectEditTask = () => {
    this.props.changeEditCardId(null);
  }

  render() {
    return (
      this.props.isEditTask ? (
        <ContainerEditTask>
          <Form
            taskId={this.taskId}
            mainTitle="Change task"
            description={this.props.description}
            reward={this.props.reward}
            handleCancelButton={this.handleRejectEditTask}
            editTaskCard={this.props.editTaskCard}
            changeEditCardId={this.props.changeEditCardId}
            deleteTask={this.props.deleteTask}
          />
        </ContainerEditTask>
      ) : (
        <TaskCard
          description={this.props.description}
          color={this.props.color}
          reward={this.props.reward}
          handleOpenTaskCard={this.handleOpenTaskCardForEdit}
        />
      )
    );
  }
}

export default EditTaskCard;
