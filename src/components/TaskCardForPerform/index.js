import React, { Component } from 'react';
import TaskCard from '../TaskCard';
import TaskCardForConfirm from '../TaskCardForConfirm';
import './taskCardForPerform.scss';

export default class TaskCardForPerform extends Component {
  constructor(props) {
    super(props);
    this.taskId = this.props.taskId;

    this.state = {
      isTaskConfirm: false,
    }

    this.handleOpenTaskToConfirm = this.handleOpenTaskToConfirm.bind(this);
    this.handleRejectConfirmTask = this.handleRejectConfirmTask.bind(this);
  }

  handleOpenTaskToConfirm() {
    this.setState ({
      isTaskConfirm: true,
    })
  }

  handleRejectConfirmTask() {
    this.setState ({
      isTaskConfirm: false,
    })
  }

  render() {
    return (
      this.state.isTaskConfirm ? (
        <TaskCardForConfirm
        taskId={this.taskId}
        description={this.props.description}
        reward={this.props.reward}
        handleRejectConfirmTask={this.handleRejectConfirmTask}
        handlerOfCompletedTask={this.props.handlerOfCompletedTask}
        handlerForAddCoins={this.props.handlerForAddCoins}
        handlerForSaveCompletedTask={this.props.handlerForSaveCompletedTask}
        />
      ) : (
          <TaskCard
            handleOpenTaskCard={this.handleOpenTaskToConfirm}
            reward={this.props.reward}
            description={this.props.description}
            color={this.props.color}
          />
        )
    );
  }
}
