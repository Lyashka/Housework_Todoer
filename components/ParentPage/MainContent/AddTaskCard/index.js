import React from 'react';
import styled from 'styled-components';
import RowContainer from '../../../containers/rowContainer';

const AddTaskButton = styled.button`
  font-size: 100px;
  margin: 0 10px;
  &:active {
    background-color: #FF8933;
    border-radius: 8px;
  }
`;

const Container = styled.div`
  ${RowContainer};
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 180px;
  height: 180px;
  background-color: #FFE8DB40;
  border-radius: 8px;
  border: 2px dashed #FF8933;
  margin-bottom: 45px;
`;

const AddTask = styled.p`
  color: #FF8933;
  font-weight: 100;
  transform: rotateY(0deg);
  transition: 1s;

  ${AddTaskButton}:hover & {
    transform: rotateY(180deg);
    transition: 1s;
  }

  ${AddTaskButton}:active & {
    color: #FFFFFF;
    transition: 5ms;
  }
`;

function AddTaskCard(props) {
  return (
    <AddTaskButton onClick={() => props.handleCreateTask()}>
      <Container>
        <AddTask>+</AddTask>
      </Container>
    </AddTaskButton>
  );
}

export default AddTaskCard;
