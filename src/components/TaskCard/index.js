import React, { Component } from "react";
import './taskCard.scss';

export default class TaskCard extends Component {
  constructor(props) {
    super(props);

    this.reward = this.props.reward;
    this.description = this.props.description;
    this.color = this.props.color;

    this.state = {
      isEdit: false,
    }

    this.handleEditTask = this.handleEditTask.bind(this);
    this.handleRejectEditTask = this.handleRejectEditTask.bind(this);
  }

  handleEditTask() {
    this.setState({
      isEdit: true,
    })
  }

  handleRejectEditTask() {
    this.setState({
      isEdit: false,
    })
  }

  render() {
    return this.state.isEdit ? (
      <article className="edit-task-card">
        <div className="edit-task-card__header">
          <p className="edit-task-card__title">Change task</p>
        </div>

        <form className="edit-task-form">
          <div className="edit-task-card__body">
            <div className="edit-task-form__title">
              <label className="description-title">Title</label>
              <textarea
                className="description-textarea"
                name="description"
                required
                defaultValue={this.description}>
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
                defaultValue={this.reward}>
              </input>
            </div>
          </div>

          <div className="edit-task-card__footer">
            <div className="row-buttons-container">
              <button className="cancel-button" type="button" onClick={this.handleRejectEditTask }>
                Cancel
              </button>
              <button className="save-change-button" type="submit">
                Save
              </button>
            </div>
            <button className="delete-task-button" type="button">
              Delete
            </button>
          </div>
        </form>
      </article>
    ) : (
      <button onClick={this.handleEditTask}>
        <div className="task-card" style={{ backgroundColor: this.color }}>
          <header className="task-card__header">
            <p className="task-card__reward">{this.reward}</p>
          </header>
          <main className="task-card__body">
            <p className="task-card__description">{this.description}</p>
          </main>
        </div>
      </button>
    )
  }
}
