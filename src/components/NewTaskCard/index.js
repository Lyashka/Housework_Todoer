import React, { Component } from "react";
import determineСardСolorByTaskReward from '../../Core/determineСardСolorByTaskReward';
import './newTaskCard.scss';

export default class NewTaskCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: false,
      description: '',
      reward: '',
    }

    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRejectCreateTask = this.handleRejectCreateTask.bind(this);
    this.handleAcceptCreateTask = this.handleAcceptCreateTask.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleAddTask() {
    this.setState({
      isActive: true,
    })
  }

  handleRejectCreateTask() {
    this.setState({
      isActive: false,
    })
  }

  handleAcceptCreateTask(e) {
    e.preventDefault();

    const color = determineСardСolorByTaskReward(this.state.reward);
    const newTask = {
      reward: Number(this.state.reward),
      description: this.state.description,
      color: color,
    };

    this.props.addTaskToState(newTask);

    this.setState({
      isActive: false,
      description: '',
      reward: '',
    });
  }

  render() {
    return this.state.isActive ? (
      <article className="create-task-card">
        <div className="create-task-card__header">
          <p className="create-task-card__title">New housework task</p>
        </div>

        <form className="create-task-form" onSubmit={(e) => this.handleAcceptCreateTask(e)}>
          <div className="create-task-card__body">
            <div className="create-task-form__title">
              <label className="description-title">Title</label>
              <textarea
                className="description-textarea"
                name="description"
                autoFocus
                required
                onChange={this.handleInputChange}>
              </textarea>
            </div>
            <div className="create-task-form__reward">
              <label className="reward-title">Reward</label>
              <input
                className="reward-input"
                name="reward"
                type="number"
                min="50" max="250"
                required
                onChange={this.handleInputChange}>
              </input>
            </div>
          </div>

          <div className="create-task-card__footer">
            <button className="cancel-button" type="button" onClick={this.handleRejectCreateTask}>
              Cancel
              </button>
            <button className="create-task-button" type="submit">
              Create
              </button>
          </div>
        </form>
      </article>
    ) : (
        <button type="button" className="add-task-button" onClick={this.handleAddTask}>
          <div className="new-task-card">
            <p className="add-task">+</p>
          </div>
        </button>
      )
  }
}
