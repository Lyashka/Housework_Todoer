import React, { Component } from "react";
import ChildrenPanel from '../ChildrenPanel';
import TaskCardForPerform from '../TaskCardForPerform';
import { tasks, children } from '../../const';
import './homePageForChildren.scss';

export default class HomePageForChildren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [...tasks],
      name: children[0].name,
      coinsSum: children[0].coinsSum,
      completedTasks: children[0].completedTasks,
    };

    this.handlerOfCompletedTask = this.handlerOfCompletedTask.bind(this);
    this.handlerForAddCoins = this.handlerForAddCoins.bind(this);
  }

  handlerOfCompletedTask(taskId) {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId),
    }));
  }

  handlerForAddCoins(taskId) {
    const newCompletedTask = this.state.tasks.filter(task => task.id === taskId);

    this.setState((prevState) => ({
      coinsSum: prevState.coinsSum + newCompletedTask[0].reward,
    }));

    console.log(this.state.coinsSum)
  }

  render() {
    return (
      <div>
        <main className="container">
          <article className="user-panel">
            <ChildrenPanel
            name={this.state.name}
            coinsSum={this.state.coinsSum}/>
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
                  <TaskCardForPerform
                    taskId={task.id}
                    reward={task.reward}
                    description={task.description}
                    color={task.color}
                    handlerOfCompletedTask={this.handlerOfCompletedTask}
                    handlerForAddCoins={this.handlerForAddCoins}
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
