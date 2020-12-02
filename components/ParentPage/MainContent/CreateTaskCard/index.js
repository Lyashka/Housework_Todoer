import React from 'react';
import styled, { css } from 'styled-components';
import RowContainer from '../../../containers/rowContainer';
import ColContainer from '../../../containers/colContainer';
import handleChange from '../../../../common/utils/handleChange';
import determineСardСolorByTaskReward from '../../../../Core/determineCardColorByTaskReward';

const FieldContainer = css`
  ${ColContainer};
  margin-bottom: 10px;
`;

const Title = css`
  color: #454545;
  font-size: 0.8em;
  margin-bottom: 5px;
`;

const CreateTaskContainer = styled.section`
  ${ColContainer};
  box-sizing: border-box;
  height: 235px;
  width: 180px;
  border-radius: 8px;
  margin-left: 10px;
  box-shadow: -2px 4px 10px #00000045;
`;

const CreateTaskHeader = styled.div`
  ${RowContainer};
  padding: 15px;
  justify-content: flex-start;
  background-color: #FFE8DB;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const CreateTaskTitle = styled.p`
  font-size: 0.85em;
  color: #FF8933;
  font-weight: 700;
`;

const CreateTaskForm = styled.form``;

const CreateTaskBody = styled.div`
  ${ColContainer};
  padding: 0px 15px;
  height: 135px;
  background-color: #FFE8DB;
`;

const FormTitle = styled.div`
  ${FieldContainer};
`;

const DescriptionTitle = styled.label`
  ${Title};
`;

const DescriptionTextarea = styled.textarea`
  width: 140px;
  height: 40px;
  resize: none;
  font-size: 0.8em;
`;

const ContainerReward = styled.div`
  ${FieldContainer};
`;

const RewardTitle = styled.label`
  ${Title};
`;

const RewardInput = styled.input`
  width: 60px;
  height: 30px;
`;

const CreateTaskFooter = styled.div`
  ${RowContainer};
  padding: 10px 15px 20px 15px;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const CancelButton = styled.button`
  padding: 5px;
  margin-right: 10px;
  font-size: 0.9em;
  color: #F95D66;
  border: 1px solid #F95D66;

  &:hover {
    box-shadow: 0px 10px 12px -6px #F95D66;
  }

  &:active {
    background-color: #F95D66;
    color: #FFFFFF;
  }
`;

const CreateTaskButton = styled.button`
  width: 80px;
  padding: 5px;
  font-size: 0.9em;
  color: #FFFFFF;
  background-color: #FF8933;

  &:hover {
    box-shadow: 0px 10px 12px -6px #FF8933;
  }

  &:active {
    background-color: #FFFFFF;
    color: #FF8933;
    border: 1px solid #FF8933;
  }
`;

class CreateTaskCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: '',
      reward: '',
    };
  }

  handleInputChange = (e) => {
    handleChange(e, this);
  }

  handleAcceptCreateTask(e) {
    e.preventDefault();

    const color = determineСardСolorByTaskReward(this.state.reward);
    const newTask = {
      reward: Number(this.state.reward),
      description: this.state.description,
      color,
    };

    this.props.addTaskToState(newTask);
    this.props.handleRejectCreateTask();

    this.setState({
      description: '',
      reward: '',
    });
  }

  render() {
    return (
      <CreateTaskContainer>
        <CreateTaskHeader>
          <CreateTaskTitle>New housework task</CreateTaskTitle>
        </CreateTaskHeader>
        <CreateTaskForm onSubmit={(e) => this.handleAcceptCreateTask(e)}>
          <CreateTaskBody>
            <FormTitle>
              <DescriptionTitle>Title</DescriptionTitle>
              <DescriptionTextarea
                onChange={(e) => this.handleInputChange(e)}
                name="description"
                autoFocus
                required
              />
            </FormTitle>
            <ContainerReward>
              <RewardTitle>Reward</RewardTitle>
              <RewardInput
                onChange={(e) => this.handleInputChange(e)}
                name="reward"
                type="number"
                min="50"
                max="250"
                required
              />
            </ContainerReward>
          </CreateTaskBody>
          <CreateTaskFooter>
            <CancelButton type="button" onClick={() => this.props.handleRejectCreateTask()}>Cancel</CancelButton>
            <CreateTaskButton type="submit">Create</CreateTaskButton>
          </CreateTaskFooter>
        </CreateTaskForm>
      </CreateTaskContainer>
    );
  }
}

export default CreateTaskCard;
