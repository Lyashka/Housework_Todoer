import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import ColContainer from '../../../containers/colContainer';
import RowContainer from '../../../containers/rowContainer';
import ExitButton from '../../../../public/icons/delete_task.svg';
import HoverExitButton from '../../../../public/icons/delete_task_hover.svg';
import determineСardСolorByTaskReward from '../../../../Core/determineCardColorByTaskReward';
import handleChange from '../../../../common/utils/handleChange';

const HeaderForm = styled.div`
  ${RowContainer};
  padding: 15px;
  justify-content: flex-start;
  background-color: #FFE8DB;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

const TitleForm = styled.p`
  font-size: 0.85em;
  color: #FF8933;
  font-weight: 700;
`;

const BasicForm = styled.form``;

const BodyForm = styled.div`
  ${ColContainer};
  height: 135px;
  padding: 0px 15px;
  background-color: #FFE8DB;
`;

const FieldContainer = styled.div`
  ${ColContainer};
  margin-bottom: 10px;
`;

const Title = styled.label`
  color: #454545;
  font-size: 0.8em;
  margin-bottom: 5px;
`;

const Textarea = styled.textarea`
  width: 140px;
  height: 40px;
  resize: none;
  font-size: 0.8em;
`;

const Input = styled.input`
  width: 60px;
  height: 30px;
`;

const CreateTaskFooter = styled.div`
  ${RowContainer};
  flex-wrap: wrap;
  padding: 10px 15px 20px 15px;
  justify-content: space-between;
  background-color: #FFFFFF;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
`;

const CancelButton = styled.button`
  flex-basis: 35%;
  padding: 5px;
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
  flex-basis: 60%;
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

const DeleteButton = styled.button`
  flex-basis: 100%;
  margin-top: 10px;
  padding: 5px;
  color: #FFFFFF;
  background-color: #696969;
  background-image: url(${ExitButton});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position-x: 75%;
  background-position-y: center;

  &:hover {
    background-image: url(${HoverExitButton});
  }

  &:active {
    color: #F95D66;
  }
`;

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.taskId = this.props.taskId;

    this.state = {
      description: this.props.description,
      reward: this.props.reward,
    };
  }

  handleInputChange = (e) => {
    handleChange(e, this);
  }

  handleEditTask = (e) => {
    e.preventDefault();

    const color = determineСardСolorByTaskReward(this.state.reward);

    const editedTask = {
      id: this.taskId,
      reward: this.state.reward,
      description: this.state.description,
      color,
    };

    this.props.editTaskCard(editedTask);
    this.props.changeEditCardId(null);

    this.setState((prevState) => ({
      reward: prevState.reward,
      description: prevState.description,
    }));
  }

  handleCreateTask(e) {
    e.preventDefault();

    const color = determineСardСolorByTaskReward(this.state.reward);
    const newTask = {
      id: uuidv4(),
      reward: Number(this.state.reward),
      description: this.state.description,
      color,
    };

    this.props.addTaskToState(newTask);
    this.props.handleCancelButton();

    this.setState({
      description: '',
      reward: '',
    });
  }

  handleRemoveTask = () => {
    this.props.deleteTask(this.taskId);
  }

  render() {
    return (
      <>
        <HeaderForm>
          <TitleForm>{this.props.mainTitle}</TitleForm>
        </HeaderForm>
        <BasicForm
          onSubmit={this.props.edit
            ? (e) => this.handleEditTask(e) : (e) => this.handleCreateTask(e)}
        >
          <BodyForm>
            <FieldContainer>
              <Title>Title</Title>
              <Textarea
                name="description"
                required
                onChange={this.handleInputChange}
                defaultValue={this.props.description}
                autoFocus={this.props.create}
              />
            </FieldContainer>
            <FieldContainer>
              <Title>Reward</Title>
              <Input
                name="reward"
                type="number"
                min="50"
                max="250"
                required
                onChange={this.handleInputChange}
                defaultValue={this.props.reward}
              />
            </FieldContainer>
          </BodyForm>
          <CreateTaskFooter>
            <CancelButton type="button" onClick={() => this.props.handleCancelButton()}>Cancel</CancelButton>
            <CreateTaskButton type="submit">Save</CreateTaskButton>
            {this.props.edit
            && <DeleteButton type="button" onClick={this.handleRemoveTask}>Delete</DeleteButton>}
          </CreateTaskFooter>
        </BasicForm>
      </>
    );
  }
}

export default Form;
