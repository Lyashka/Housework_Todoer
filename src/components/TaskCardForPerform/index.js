import React, { Component } from 'react';
import TaskCard from '../TaskCard';
import RejectImg from '../../icons/close_task.svg';
import AcceptImg from '../../icons/done_task.svg';
import './taskCardForPerform.scss';

export default class TaskCardForPerform extends Component {
  constructor(props) {
    super(props);
    this.taskId = this.props.taskId;

    this.state = {
      isTaskComplete: false,
    }
  }

  render() {
    return (
      this.state.isTaskComplete ? (
        <TaskCard
          reward={this.props.reward}
          description={this.props.description}
          color={this.props.color}
        />
      ) : (
          <div className="task-card-confirmation">
            <header className="task-card-confirmation__header confirmation-header">
              <p className="confirmation-header__text">Did you {this.props.description}?</p>
            </header>
            <main className="task-card-confirmation__body">
              <button className="task-card-confirmation__reject reject-task-complete">
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
        )
    );
  }
}
