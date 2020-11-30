import React from 'react';
import styled from 'styled-components';
import ParentCard from '../../ParentCard';

const UsersPanel = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 75vh;

  background-color: purple;
`;

function SideBar() {
  return (
    <UsersPanel>
      <ParentCard name="Jack" />
    </UsersPanel>
  );
}

export default SideBar;
