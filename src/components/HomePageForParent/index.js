import React, { Component } from "react";
import ParentPanel from '../ParentPanel';
import TaskCardForEdit from '../TaskCardForEdit';
import NewTaskCard from '../NewTaskCard';
import { tasks } from '../../const';
import './homePageForParent.scss';

export default class HomePageForParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [...tasks],
      editTaskId: null,
    };

    this.createNewTask = this.createNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.changeEditCardId = this.changeEditCardId.bind(this);
    this.editTaskCard = this.editTaskCard.bind(this);
  }

  createNewTask(newTask) {
    this.setState({
      tasks: [...this.state.tasks, newTask],
    })
  }

  deleteTask(taskId) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId),
    }));
  }

  changeEditCardId(taskId) {
    this.setState({
      editTaskId: taskId,
    })
  }

  editTaskCard(editedTask) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === editedTask.id) {
          return editedTask;
        } else {
          return task;
        }
      }),
    }));
  }

  render() {
    return (
      <div>
        <main className="container">
          <article className="user-panel">
            <ParentPanel name="Jack" className=""/>
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
                    isEditTask={this.state.editTaskId === task.id}
                    deleteTask={this.deleteTask}
                    changeEditCardId={this.changeEditCardId}
                    editTaskCard={this.editTaskCard}
                  />
                </li>
                ))}
                <li className="task-item">
                  <NewTaskCard addTaskToState={this.createNewTask}/>
                </li>
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
