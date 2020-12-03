import React from 'react';
import styled from 'styled-components';
import ChildCard from './ChildCard';
import AvatarLily from '../../../src/icons/Lily.svg';
// import AvatarMary from '../../../src/icons/Mary.svg';

const UsersPanel = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 75vh;
`;

function SideBar() {
  return (
    <UsersPanel>
      <ChildCard
        name="Lily"
        coins="340"
        src={AvatarLily}
      />
    </UsersPanel>
  );
}

export default SideBar;
