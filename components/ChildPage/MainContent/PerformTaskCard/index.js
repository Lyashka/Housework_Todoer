import React from 'react';
import TaskCard from '../TaskCard';
import ConfirmTaskCard from '../ConfirmTaskCard';

class PerformTaskCard extends React.Component {
  constructor(props) {
    super(props);
    this.taskId = this.props.taskId;

    this.state = {
      isTaskConfirm: false,
    };
  }

  handleOpenTaskToConfirm = () => {
    this.setState({
      isTaskConfirm: true,
    });
  }

  handleRejectConfirmTask = () => {
    this.setState({
      isTaskConfirm: false,
    });
  }

  render() {
    return (
      this.state.isTaskConfirm ? (
        <ConfirmTaskCard
          taskId={this.taskId}
          description={this.props.description}
          reward={this.props.reward}
          handleRejectConfirmTask={this.handleRejectConfirmTask}
          handlerOfCompletedTask={this.props.handlerOfCompletedTask}
          handlerForAddCoins={this.props.handlerForAddCoins}
          handlerForSaveCompletedTask={this.props.handlerForSaveCompletedTask}
        />
      ) : (
        <TaskCard
          handleOpenTaskCard={this.handleOpenTaskToConfirm}
          reward={this.props.reward}
          description={this.props.description}
          color={this.props.color}
        />
      )
    );
  }
}

export default PerformTaskCard;
