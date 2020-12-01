import React, { useState } from 'react';
import styled from 'styled-components';
import ColContainer from '../../../../containers/colContainer';
import RowContainer from '../../../../containers/rowContainer';
import Avatar from '../../../../../src/icons/Jack.svg';
import ExitImage from '../../../../../src/icons/exit_to_app.svg';
import ExitImageHover from '../../../../../src/icons/exit_to_app_hover.svg';
import ExitImageActive from '../../../../../src/icons/exit_to_app_active.svg';

const CardContainer = styled.div`
  ${ColContainer}
  justify-content: flex-start;
  position: relative;
  width: 70%;
  height: 10em;
  padding: 15px;
  border-radius: 8px;
  background-color: #FFE8DB;
  z-index: 1;
`;

const ParentAvatar = styled.div`
  ${ColContainer}
  justify-content: center;
  position: absolute;
  left: 10px;
  top: 20%;
`;

const ParentImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 90px;
  height: 90px;
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
  justify-content: flex-start;
  padding: 10px 0px 0px 100px;
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

const ParentFooter = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -10px;
  width: 70%;
  padding: 20px 15px 15px 15px;
  background-color: #FFFFFF;
  box-shadow: -2px 4px 10px rgba(0, 0, 0, 0.15);
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  z-index: 0;
`;

const ParentForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const ParentLabel = styled.label`
  font-size: 0.85em;
`;

const ButtonsChangePassword = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 0.9em;
`;

const ParentPassword = styled.input`
  border: 1px solid #555555;
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const RejectChangePasswordButton = styled.button`
  margin-right: 10px;
  padding: 5px;
  border: 1px solid #F95D66;
  color:#F95D66;

  &:hover {
    box-shadow: 0px 10px 12px -6px #F95D66;
  }

  &:active {
    background-color: #F95D66;
    color: #FFFFFF;
  }
`;

const AcceptChangePasswordButton = styled.button`
  padding: 5px;
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

function ParentCard(props) {
  const greeting = `Hello, ${props.name}!`;
  const [isChangePassword, setPassword] = useState(false);

  return (
    <>
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
                {greeting}
              </ParentGreeting>
              <ChangePasswordButton onClick={() => setPassword(true)}>
                Change password
              </ChangePasswordButton>
            </ParentText>
          </ParentInformation>
        </ParentBody>

      </CardContainer>

      {isChangePassword
        && (
        <ParentFooter>
          <ParentForm>
            <ParentLabel>
              New password
              <ParentPassword type="password" />
            </ParentLabel>
            <ButtonsChangePassword>
              <RejectChangePasswordButton type="button" onClick={() => setPassword(false)}>
                Cancel
              </RejectChangePasswordButton>
              <AcceptChangePasswordButton type="submit">
                Save
              </AcceptChangePasswordButton>
            </ButtonsChangePassword>
          </ParentForm>
        </ParentFooter>
        )}
    </>
  );
}

export default ParentCard;
