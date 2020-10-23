import React, { Component } from 'react';
import './taskCardForConfirm.scss';

export default class TaskCardForConfirm extends Component {
  constructor(props) {
    super(props);

    this.taskId = this.props.taskId;
    this.description = this.props.description;
    this.reward = this.props.reward;

    this.state = {
      isTaskComplete: false,
    }

    this.handleConfirmCompleteTask = this.handleConfirmCompleteTask.bind(this);
    this.handleRejectCompleteTask = this.handleRejectCompleteTask.bind(this);
  }

  handleConfirmCompleteTask() {
    this.setState({
      isTaskComplete: true,
    })

    setTimeout(() => {
      this.props.handlerOfCompletedTask(this.taskId)
    }, 2000);
  }

  handleRejectCompleteTask() {
    this.setState({
      isTaskComplete: false,
    })

    this.props.handleRejectConfirmTask();
  }

  render() {
    return (
      this.state.isTaskComplete ?
        (
          <main className="task-card-complete">
            <div className="task-card-complete__done">
              <div className="task-card-complete__contour">
                <div className="task-card-complete__img"></div>
              </div>
            </div>
            <p className="task-card-complete__well">Well, done!</p>
            <p className="task-card-complete__reward">{`You earned ${this.reward} Help Coins`}</p>
          </main>
        ) :
        (<div className="task-card-confirmation">
          <header className="task-card-confirmation__header confirmation-header">
            <p className="confirmation-header__text">Did you {this.props.description}?</p>
          </header>
          <main className="task-card-confirmation__body">
            <button className="task-card-confirmation__reject reject-task-complete"
              onClick={this.handleRejectCompleteTask}>
              <div className="reject-task-complete__contour">
                <div className="reject-task-complete__img"></div>
              </div>
              <p className="reject-task-complete__text">No, maybe later</p>
            </button>
            <button className="task-card-confirmation__accept accept-task-complete"
              onClick={this.handleConfirmCompleteTask}>
              <div className="accept-task-complete__contour">
                <div className="accept-task-complete__img"></div>
              </div>
              <p className="accept-task-complete__text">Yes, I did!</p>
            </button>
          </main>
        </div>)
    )
  }
}
