import React from 'react';
import styled from 'styled-components';
import ColContainer from '../../../containers/colContainer';
import RowContainer from '../../../containers/rowContainer';
import HoverCloseTaskImage from '../../../../public/icons/close_task_hover.svg';
import CloseTaskImage from '../../../../public/icons/close_task.svg';
import DoneTask from '../../../../public/icons/done_task.svg';

const ContainerCompleteTaskCard = styled.div`
  width: 180px;
  height: 180px;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 20px;

  ${ColContainer};
  justify-content: space-between;

  background-color: #FFE8DB;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const DoneTaskCard = styled.div`
  ${RowContainer};
  justify-content: center;
`;

const ContourCompleteTask = styled.div`
  width: 90px;
  height: 90px;
  margin-bottom: 10px;
  padding: 10px 7px;
  border: 1px dashed #FF8933;
  border-radius: 50%;
`;

const ImageCompleteTask = styled.div`
  position: relative;
  top: 15px;
  left: 5px;
  width: 60px;
  height: 46px;

  background-image: url(${DoneTask});
  background-repeat: no-repeat;
`;

const WellTextCompleteTask = styled.p`
  color: #FF8933;
  font-size: 1.1em;
`;

const RewardTextCompleteTask = styled.p`
  color: #555555;
  font-size: 0.9em;
`;

const ContainerConfirmationTaskCard = styled.div`
  ${ColContainer};
  justify-content: space-between;

  width: 180px;
  height: 180px;
  border-radius: 8px;
  margin-bottom: 15px;
  padding: 20px;

  background-color: #FFE8DB;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const HeaderContainer = styled.header`
  ${RowContainer};
  justify-content: flex-end;
  align-items: center;
`;

const HeaderText = styled.p``;

const Body = styled.div`
  ${RowContainer};
  justify-content: space-around;
`;

const RejectContour = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px 7px;
`;

const RejectImage = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${CloseTaskImage});
  background-repeat: no-repeat;
`;

const RejectText = styled.p`
  font-size: 0.8em;
  color: #555555;
  font-weight: 300;
`;

const RejectConfirmButton = styled.button`
  ${ColContainer};
  align-items: center;
  justify-content: space-between;
  flex: 1 0 75px;

  &:hover ${RejectImage} {
    background-image: url(${HoverCloseTaskImage});
  }

  &:hover ${RejectText} {
    font-weight: 500;
    color: #000000;
  }
`;

const AcceptContour = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  padding: 10px 7px;
  border: 1px dashed #FF8933;
  border-radius: 50%;
`;

const AcceptImage = styled.div`
  position: relative;
  width: 25px;
  height: 20px;

  background-image: url(${DoneTask});
  background-repeat: no-repeat;
`;

const AcceptText = styled.p`
  font-size: 0.8em;
  color: #FF8933;
  font-weight: 300;
`;

const AcceptConfirmButton = styled.button`
  ${ColContainer};
  align-items: center;
  justify-content: space-between;
  flex: 1 0 55px;

  &:hover ${AcceptContour} {
    border: 1px solid #FF8933;
  }

  &:hover ${AcceptText} {
    font-weight: 500;
  }
`;

class ConfirmTaskCard extends React.Component {
  constructor(props) {
    super(props);

    this.taskId = this.props.taskId;
    this.description = this.props.description;
    this.reward = this.props.reward;

    this.state = {
      isTaskComplete: false,
    };
  }

  handleConfirmCompleteTask = () => {
    this.setState({
      isTaskComplete: true,
    });

    console.log(this.taskId);

    setTimeout(() => {
      this.props.handlerForSaveCompletedTask(this.taskId);
      this.props.handlerForAddCoins(this.taskId);
      this.props.handlerOfCompletedTask(this.taskId);
    }, 2000);
  }

  handleRejectCompleteTask = () => {
    this.setState({
      isTaskComplete: false,
    });

    this.props.handleRejectConfirmTask();
  }

  render() {
    return (
      this.state.isTaskComplete ? (
        <ContainerCompleteTaskCard>
          <DoneTaskCard>
            <ContourCompleteTask>
              <ImageCompleteTask />
            </ContourCompleteTask>
          </DoneTaskCard>
          <WellTextCompleteTask>Well, done!</WellTextCompleteTask>
          <RewardTextCompleteTask>{`You earned ${this.reward} Help Coins`}</RewardTextCompleteTask>
        </ContainerCompleteTaskCard>
      ) : (
        <ContainerConfirmationTaskCard>
          <HeaderContainer>
            <HeaderText>{`Did you ${this.props.description}?`}</HeaderText>
          </HeaderContainer>
          <Body>
            <RejectConfirmButton onClick={this.handleRejectCompleteTask}>
              <RejectContour>
                <RejectImage />
              </RejectContour>
              <RejectText>No, maybe later</RejectText>
            </RejectConfirmButton>
            <AcceptConfirmButton onClick={this.handleConfirmCompleteTask}>
              <AcceptContour>
                <AcceptImage />
              </AcceptContour>
              <AcceptText>Yes, I did!</AcceptText>
            </AcceptConfirmButton>
          </Body>
        </ContainerConfirmationTaskCard>
      )
    );
  }
}

export default ConfirmTaskCard;
