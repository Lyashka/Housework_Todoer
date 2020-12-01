import React from 'react';
import styled from 'styled-components';
import ParentCard from './UsersCard/ParentCard';
import ChildCard from './UsersCard/ChildCard';
import { users } from '../../../const';
import AvatarLily from '../../../src/icons/Lily.svg';
import AvatarMary from '../../../src/icons/Mary.svg';

const UsersPanel = styled.section`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 75vh;
`;

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      parent: users.filter((user) => user.role === 'parent'),
      children: users.filter((user) => user.role === 'child'),
    };
  }

  render() {
    return (
      <UsersPanel>
        {this.state.parent
        && <ParentCard name={this.state.parent[0].name} />}
        {this.state.children.map((child, index) => (
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
  }
}

export default SideBar;
