import React from 'react';
import styled from 'styled-components';
import ColContainer from '../containers/colContainer.js';
import RowContainer from '../containers/rowContainer.js';
import Avatar from '../../src/icons/Jack.svg';
import ExitImage from '../../src/icons/exit_to_app.svg';
import ExitImageHover from '../../src/icons/exit_to_app_hover.svg';
import ExitImageActive from '../../src/icons/exit_to_app_active.svg';

const CardContainer = styled.div`
  ${ColContainer}
  justify-content: flex-start;
  position: relative;
  width: 60%;
  height: 10em;
  padding: 10px;
  background-color: #FFE8DB;
  border-radius: 8px;
`;

const ParentAvatar = styled.div`
  ${ColContainer}
  justify-content: center;
  position: absolute;
  left: 10px;
  top: 20%;
`;

const ParentImg = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const ParentHeader = styled.div`
  ${RowContainer}
  justify-content: flex-end;
`;

const LeaveParentButton = styled.a`
  ${RowContainer}
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
  width: 50px;
  height: 20px;
  font-size: 0.8em;
  color: #555555;
  background-image: url(${ExitImage});
  background-size: 30%;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: center;

  &:hover {
    color: #000000;
    background-image: url(${ExitImageHover});
  }

  &:active {
    color: #FF8933;
    background-image: url(${ExitImageActive});
  }
`;

const ParentBody = styled.div`
  ${RowContainer}
  justify-content: space-around;
  padding: 10px 0px 0px 80px;
  font-size: 1.2em;
`;

const ParentInformation = styled.div`
  ${ColContainer}
  min-width: 120px;
`;

const ParentText = styled.div`
  ${ColContainer}
  justify-content: center;
  align-items: flex-start;
`;

const ParentGreeting = styled.p`
  color: #555555;
  margin-bottom: 10px;
`;

const ChangePasswordButton = styled.button`
  color: #FF8933;
  font-size: 0.8em;

  &:hover {
    color: #F95D66;
  }

  &:active {
    background-color: #F95D66;
    color: #FFFFFF;
    border-radius: 2px;
  }
`;

class UserCard extends React.Component {
  render() {
    return (
      <CardContainer>

        <ParentAvatar>
          <ParentImg src={Avatar} />
        </ParentAvatar>

        <ParentHeader>
          <LeaveParentButton href="!#">
            Leave
          </LeaveParentButton>
        </ParentHeader>

        <ParentBody>
          <ParentInformation>
            <ParentText>
              <ParentGreeting>
                {'Hello, ' + this.props.name + '!'}
              </ParentGreeting>
              <ChangePasswordButton>
                Change password
              </ChangePasswordButton>
            </ParentText>
          </ParentInformation>
        </ParentBody>

      </CardContainer>
    );
  }
}

export default UserCard;
