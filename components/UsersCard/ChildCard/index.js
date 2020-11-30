import React from 'react';
import styled from 'styled-components';
import RowContainer from '../../containers/rowContainer';

const CardContainer = styled.div`
  ${RowContainer}
  align-items: center;
  justify-content: flex-start;
  width: 70%;
  height: 10em;
  padding: 15px;
  background-color: #FFD9DB;
  border-radius: 8px;
  margin-top: ${(props) => props.marginSize};
`;

const ChildAvatar = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  margin-right: 20px;
`;

const ChildInformation = styled.div`
  ${RowContainer}
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  font-size: 1.2em;
`;

const ChildName = styled.p`
`;

const ChildCoins = styled.p`
  background-color: #F95D66;
  color: #FFFFFF;
  padding: 5px;
`;

const ChildChangeHC = styled.button`
  color: #F95D66;
  font-size: 1em;

  &:hover {
    color: #FF8933;
  }

  &:active {
    background-color: #FF8933;
    color: #FFFFFF;
    border-radius: 2px;
  }
`;

function ChildCard(props) {
  return (
    <CardContainer marginSize={props.marginSize}>
      <ChildAvatar src={props.src} />
      <div>
        <ChildInformation>
          <ChildName>
            {props.name}
          </ChildName>
          <ChildCoins>
            {`${props.coins} HC`}
          </ChildCoins>
        </ChildInformation>
        <ChildChangeHC>
          Change HC amount
        </ChildChangeHC>
      </div>
    </CardContainer>
  );
}

export default ChildCard;
