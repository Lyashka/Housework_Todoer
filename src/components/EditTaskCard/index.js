import React, { Component } from "react";
import './editTaskCard.scss';

export default class EditTaskCard extends Component {
  render() {
    return (
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
                required>
              </textarea>
            </div>
            <div className="edit-task-form__reward">
              <label className="reward-title">Reward</label>
              <input
                className="reward-input"
                name="reward"
                type="number"
                min="50" max="250"
                required>
              </input>
            </div>
          </div>

          <div className="edit-task-card__footer">
            <div className="row-buttons-container">
              <button className="cancel-button" type="button">
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
    );
  }
}
