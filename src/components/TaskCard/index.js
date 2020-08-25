import React, { Component } from "react";
import './taskCard.scss';

export default class TaskCard extends Component {
  constructor(props) {
    super(props);

    this.reward = this.props.reward;
    this.description = this.props.description;
    this.color = this.props.color;
  }

  render() {
    return (
      <div className="task-card" style={{ backgroundColor: this.color }}>
        <header className="task-card__header">
          <p className="task-card__reward">{this.reward}</p>
        </header>
        <main className="task-card__body">
          <p className="task-card__description">{this.description}</p>
        </main>
      </div>
    )
  }
}
