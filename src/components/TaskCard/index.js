import React from "react";
import './taskCard.scss';

export default function TaskCard(props) {
  return (
    <button onClick={props.handleOpenTaskCard}>
      <div className="task-card" style={{ backgroundColor: props.color }}>
        <header className="task-card__header">
          <p className="task-card__reward">{props.reward}</p>
        </header>
        <main className="task-card__body">
          <p className="task-card__description">{props.description}</p>
        </main>
      </div>
    </button>
  );
}
