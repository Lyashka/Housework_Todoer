import React, { Component } from 'react';
import TaskCard from '../TaskCard';
import './taskCardForPerform.scss';

export default class TaskCardForPerform extends Component {
  constructor(props) {
    super(props);
    this.taskId = this.props.taskId;

    this.state = {
      isTaskComplete: false,
    }

    this.handleOpenTaskToConfirm = this.handleOpenTaskToConfirm.bind(this);
    this.handleRejectConfirmTask = this.handleRejectConfirmTask.bind(this);
  }

  handleOpenTaskToConfirm() {
    this.setState ({
      isTaskComplete: true,
    })
  }

  handleRejectConfirmTask() {
    this.setState ({
      isTaskComplete: false,
    })
  }

  render() {
    return (
      this.state.isTaskComplete ? (
        <div className="task-card-confirmation">
          <header className="task-card-confirmation__header confirmation-header">
            <p className="confirmation-header__text">Did you {this.props.description}?</p>
          </header>
          <main className="task-card-confirmation__body">
            <button className="task-card-confirmation__reject reject-task-complete" onClick={this.handleRejectConfirmTask}>
              <div className="reject-task-complete__contour">
                <div className="reject-task-complete__img"></div>
              </div>

              <p className="reject-task-complete__text">No, maybe later</p>
            </button>
            <button className="task-card-confirmation__accept accept-task-complete">
              <div className="accept-task-complete__contour">
                <div className="accept-task-complete__img"></div>
              </div>
              <p className="accept-task-complete__text">Yes, I did!</p>
            </button>
          </main>
        </div>
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
