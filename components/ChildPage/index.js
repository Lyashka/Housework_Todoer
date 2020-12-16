import React from 'react';
import styled from 'styled-components';
import ImageFooter from '../../src/icons/background_for_home_page.png';
import SideBar from './SideBar';
import MainContent from './MainContent';
import { tasks, children, completedTasks } from '../../const';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.main`
  display: flex;
  flex-direction: row;
  flex: 1 0 auto;
  z-index: 1;
  padding: 5vh 10vw 0vh 5vw;
`;

const Footer = styled.footer`
  position: relative;
  height: 20vh;
  z-index: 0;
`;

const BackgroundFooter = styled.img.attrs((props) => ({
  src: props.src,
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 100%;
  width: auto;
`;

class ChildPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [...tasks],
      name: children[0].name,
      coinsSum: children[0].coinsSum,
      completedTasks: [...completedTasks],
    };
  }

  handlerOfCompletedTask = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== taskId),
    }));
  }

  handlerForAddCoins = (taskId) => {
    const newCompletedTask = this.state.tasks.filter((task) => task.id === taskId);

    this.setState((prevState) => ({
      coinsSum: prevState.coinsSum + newCompletedTask[0].reward,
    }));
  }

  handlerForSaveCompletedTask = (taskId) => {
    const newCompletedTask = this.state.tasks.filter((task) => task.id === taskId);

    this.setState((prevState) => ({
      completedTasks: [...prevState.completedTasks, newCompletedTask[0]],
    }));
  }

  render() {
    return (
      <PageContainer>
        <Content>
          <SideBar
            name={this.state.name}
            coins={this.state.coinsSum}
          />
          <MainContent
            tasks={this.state.tasks}
            completedTasks={this.state.completedTasks}
            handlerOfCompletedTask={this.handlerOfCompletedTask}
            handlerForAddCoins={this.handlerForAddCoins}
            handlerForSaveCompletedTask={this.handlerForSaveCompletedTask}
          />
        </Content>
        {this.props.user && (
          <Footer>
            <BackgroundFooter src={ImageFooter} />
          </Footer>
        )}
      </PageContainer>
    );
  }
}

export default ChildPage;
