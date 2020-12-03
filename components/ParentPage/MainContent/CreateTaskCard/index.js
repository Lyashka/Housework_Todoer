import React from 'react';
import styled from 'styled-components';
import Form from '../Form';
import ColContainer from '../../../containers/colContainer';

const CreateTaskContainer = styled.section`
  ${ColContainer};
  box-sizing: border-box;
  height: 235px;
  width: 180px;
  border-radius: 8px;
  margin-left: 10px;
  box-shadow: -2px 4px 10px #00000045;
`;

class CreateTaskCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      reward: '',
    };
  }

  render() {
    return (
      <CreateTaskContainer>
        <Form
          create
          mainTitle="New housework task"
          description={this.state.description}
          reward={this.state.reward}
          addTaskToState={this.props.addTaskToState}
          handleCancelButton={this.props.handleRejectCreateTask}
        />
      </CreateTaskContainer>
    );
  }
}

export default CreateTaskCard;
