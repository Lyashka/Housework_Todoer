import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import MainContent from './MainContent';
import ImageFooter from '../../src/icons/background_for_home_page.png';
import { tasks } from '../../const';

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

function ParentPage({ user }) {
  return (
    <PageContainer>
      <Content>
        <SideBar />
        <MainContent tasks={tasks} />
      </Content>
      {user && (
        <Footer>
          <BackgroundFooter src={ImageFooter} />
        </Footer>
      )}
    </PageContainer>
  );
}

export default ParentPage;
