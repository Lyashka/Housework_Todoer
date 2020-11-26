import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 180px;
  height: 180px;
  border-radius: 8px;
  margin-bottom: 15px;

  color: #ffffff;
  text-align: center;
  cursor: pointer;
  background-color: ${props => props.color};
`;

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  padding: 20px 15px;
`;

const Reward = styled.p`
  padding: 8px;
  border-radius: 0px 8px;
  background-color: #64060640;
  font-weight: 500;
`;

const Description = styled.p`
  font-weight: 500;
  text-align: start;
`;

function TaskCard(props) {
  return (
    <button onClick={props.handleOpenTaskCard}>
      <Card color={props.color}>
        <Header>
          <Reward>
            {props.reward}
          </Reward>
        </Header>
        <Main>
          <Description>
            {props.description}
          </Description>
        </Main>
      </Card>
    </button>
  );
}

export default TaskCard;
