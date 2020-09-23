import React, { Component } from "react";
import TaskCard from '../TaskCard';
import determineСardСolorByTaskReward from '../../Core/determineСardСolorByTaskReward';
import { handleChange } from '../../Common/utils/handleChange';
import './taskCardForEdit.scss';

export default class TaskCardForEdit extends Component {
  constructor(props) {
    super(props);
    this.taskId = this.props.taskId;

    this.state = {
      description: this.props.description,
      reward: this.props.reward,
    }

    this.handleOpenTaskCardForEdit = this.handleOpenTaskCardForEdit.bind(this);
    this.handleRejectEditTask = this.handleRejectEditTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    handleChange(e, this);
  }

  handleOpenTaskCardForEdit() {
    this.props.changeEditCardId(this.taskId);
  }

  handleRejectEditTask() {
    this.props.changeEditCardId(null);
  }

  handleRemoveTask() {
    this.props.deleteTask(this.taskId);
  }

  handleEditTask(e) {
    e.preventDefault();

    const color = determineСardСolorByTaskReward(this.state.reward);

    const editedTask = {
      id: this.taskId,
      reward: this.state.reward,
      description: this.state.description,
      color,
    }

    this.props.editTaskCard(editedTask);
    this.props.changeEditCardId(null);

    this.setState({
      reward: this.state.reward,
      description: this.state.description,
    });
  }

  render() {
    return this.props.isEditTask ? (
      <article className="edit-task-card">
        <div className="edit-task-card__header">
          <p className="edit-task-card__title">Change task</p>
        </div>

        <form className="edit-task-form" onSubmit={(e) => this.handleEditTask(e)}>
          <div className="edit-task-card__body">
            <div className="edit-task-form__title">
              <label className="description-title">Title</label>
              <textarea
                className="description-textarea"
                name="description"
                required
                onChange={this.handleInputChange}
                defaultValue={this.props.description}>
              </textarea>
            </div>
            <div className="edit-task-form__reward">
              <label className="reward-title">Reward</label>
              <input
                className="reward-input"
                name="reward"
                type="number"
                min="50" max="250"
                required
                onChange={this.handleInputChange}
                defaultValue={this.props.reward}>
              </input>
            </div>
          </div>

          <div className="edit-task-card__footer">
            <div className="row-buttons-container">
              <button className="cancel-button" type="button" onClick={this.handleRejectEditTask}>
                Cancel
              </button>
              <button className="save-change-button" type="submit">
                Save
              </button>
            </div>
            <button className="delete-task-button" type="button" onClick={this.handleRemoveTask}>
              Delete
            </button>
          </div>
        </form>
      </article>
    ) : (
      <TaskCard
      reward={this.props.reward}
      description={this.props.description}
      color={this.props.color}
      handleOpenTaskCard={this.handleOpenTaskCardForEdit}
      />
    )
  }
}
