import React, { Component } from 'react';
import TaskCard from '../TaskCard';
import { completedTasks } from '../../const';

export default class HistoryCompletedTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completedTasks: [...completedTasks]
    }
  }

  render() {
    return (
      <ul className="tasks">
        {this.state.completedTasks.map((task) => (
          <li className="task-item" key={task.id}>
            <TaskCard
              taskId={task.id}
              reward={task.reward}
              description={task.description}
              color={task.color}
              handleOpenTaskCard={() => {}}
            />
          </li>
        ))}
      </ul>
    )
  }
}
