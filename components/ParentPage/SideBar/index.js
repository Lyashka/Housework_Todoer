import React, { useState } from 'react';
import styled from 'styled-components';
import ParentCard from './UsersCard/ParentCard';
import ChildCard from './UsersCard/ChildCard';
import { parent, children } from '../../../const';
import AvatarLily from '../../../public/icons/Lily.svg';
import AvatarMary from '../../../public/icons/Mary.svg';

const UsersPanel = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 75vh;
`;

const SideBar = () => {
  const [changePassword, setNewPassword] = useState(false);

  return (
    <UsersPanel>
      <ParentCard
        name={parent.name}
        isChangePassword={changePassword}
        setNewPassword={setNewPassword}
      />
      {children.map((child, index) => (
        <ChildCard
          key={child.id}
          name={child.name}
          coins={child.coinsSum}
          src={child.name === 'Lily' ? AvatarLily : AvatarMary}
          marginSize={index === 0 ? '80px' : '40px'}
        />
      ))}
    </UsersPanel>
  );
};

export default SideBar;
