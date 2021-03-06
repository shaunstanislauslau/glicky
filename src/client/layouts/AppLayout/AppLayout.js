// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

import { type ThemeProps } from '../../theme';

import AppBarLayout from '../AppBarLayout';
import Routes from '../../routes';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100vw;
  transition: background 0.2s linear;
  background: ${(p: ThemeProps) => p.theme.colour('background_body')};
`;

const MainWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ScrollingContent = styled.div`
  flex: 1;
  overflow: auto;
  padding: 0 ${(p: ThemeProps) => p.theme.sizing('md')};
`;

class AppLayout extends Component<{}, {}> {
  scrollingContent = React.createRef<HTMLElement>();

  scrollToTop = () => {
    const { current } = this.scrollingContent;
    if (!current) {
      return;
    }
    current.scrollTop = 0;
  };

  render() {
    return (
      <Container>
        <MainWrapper>
          <AppBarLayout scrollToTop={this.scrollToTop} />
          <ScrollingContent ref={this.scrollingContent}>
            <Routes scrollToTop={this.scrollToTop} />
          </ScrollingContent>
        </MainWrapper>
      </Container>
    );
  }
}

export default AppLayout;
