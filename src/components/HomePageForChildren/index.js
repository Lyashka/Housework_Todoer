import React, { Component } from "react";
import ChildrenPanel from '../ChildrenPanel';
import TaskCardForEdit from '../TaskCardForEdit';
import { tasks } from '../../const';
import './homePageForChildren.scss';

export default class HomePageForChildren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [...tasks],
    };
  }

  render() {
    return (
      <div>
        <main className="container">
          <article className="user-panel">
            <ChildrenPanel role="children" name="Lily" className=""/>
          </article>

          <article className="main-section">
            <nav>
              <ul className="navigation">
                <li className="navigation__item">
                  <button className="housework-item active-item-nav">Today’s housework</button>
                </li>
                <li className="navigation__item">
                  <button className="history-item">History</button>
                </li>
              </ul>
            </nav>

            <div>
              <ul className="tasks">
                {this.state.tasks.map((task) => (
                  <li className="task-item" key={task.id}>
                  <TaskCardForEdit
                    taskId={task.id}
                    reward={task.reward}
                    description={task.description}
                    color={task.color}
                  />
                </li>
                ))}
              </ul>
            </div>
          </article>

        </main>
        <footer className="footer">
        </footer>
      </div>
    )
  }
}
