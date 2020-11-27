import React from 'react';
import styled from 'styled-components';
import UserCard from '../../UserCard';

const UsersPanel = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 75vh;

  background-color: purple;
`;

function SideBar() {
  return(
    <UsersPanel>
      <UserCard name="Jack"/>
    </UsersPanel>
  );
}

export default SideBar;
