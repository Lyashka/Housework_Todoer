import React from 'react';
import styled from 'styled-components';
import RowContainer from '../../../containers/rowContainer';
import ColContainer from '../../../containers/colContainer';
import ExitImage from '../../../../src/icons/exit_to_app.svg';
import ExitImageHover from '../../../../src/icons/exit_to_app_hover.svg';
import ExitImageActive from '../../../../src/icons/exit_to_app_active.svg';

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

const ChildAvatar = styled.div`
  ${ColContainer}
  justify-content: center;
  position: absolute;
  left: 10px;
  top: 20%;
`;

const ChildImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 90px;
  height: 90px;
  border-radius: 50%;
`;

const ChildHeader = styled.div`
  ${RowContainer}
  justify-content: flex-end;
`;

const LeaveChildButton = styled.a`
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

const ChildBody = styled.div`
  ${RowContainer}
  justify-content: flex-start;
  padding: 10px 0px 0px 100px;
  font-size: 1.2em;
`;

const ChildInformation = styled.div`
  ${ColContainer}
  min-width: 120px;
`;

const ChildText = styled.div`
  ${ColContainer}
  justify-content: center;
  align-items: flex-start;
`;

const ChildGreeting = styled.p`
  color: #555555;
  margin-bottom: 10px;
`;

const ChildCoins = styled.div`
  background-color: #FF8933;
  color: #FFFFFF;
  padding: 5px;
`;

function ChildCard(props) {
  const greeting = `Hello, ${props.name}!`;

  return (
    <CardContainer>

      <ChildAvatar>
        <ChildImg src={props.src} />
      </ChildAvatar>

      <ChildHeader>
        <LeaveChildButton href="!#">
          Leave
        </LeaveChildButton>
      </ChildHeader>

      <ChildBody>
        <ChildInformation>
          <ChildText>
            <ChildGreeting>
              {greeting}
            </ChildGreeting>
            <ChildCoins>
              {`${props.coins} HC`}
            </ChildCoins>
          </ChildText>
        </ChildInformation>
      </ChildBody>

    </CardContainer>
  );
}

export default ChildCard;
