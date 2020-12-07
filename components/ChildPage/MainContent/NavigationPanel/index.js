import React from 'react';
import styled from 'styled-components';
import RowContainer from '../../../containers/rowContainer';

const NavPanel = styled.nav`
  font-size: 1.1em;
`;

const NavList = styled.ul`
  ${RowContainer};
  margin-bottom: 15px;
`;

const NavItem = styled.li`
  display: block;
  margin-right: ${(props) => (props.first ? '40px' : '0px')};
`;

const NavButton = styled.button`
  color: ${(props) => (props.active ? '#000000' : '#CACACA')};

  &:hover {
    color: #000000;
  }
`;

function NavigationPanel() {
  return (
    <NavPanel>
      <NavList>
        <NavItem first>
          <NavButton active>
            Today’s housework
          </NavButton>
        </NavItem>
        <NavItem>
          <NavButton>
            History
          </NavButton>
        </NavItem>
      </NavList>
    </NavPanel>
  );
}

export default NavigationPanel;
