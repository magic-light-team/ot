import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { IState } from './reducers/initialState';

import { AppPages } from './info/pages';
import StartPage from './components/pages/startPage';
import ChapterPage from './components/pages/chapterPage';
import SourcePage from './components/pages/sourcePage';
import AboutPage from './components/pages/aboutPage';
import GamePage from './components/game/gamePage';
import AudioPlayer from './components/tools/audioPlayer';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface StateProps {
  pageName: string,
  music: string,
}

interface DispatchProps {
}

class App extends React.Component<StateProps & DispatchProps, any> {

  renderPage = (pageName: string): React.ReactNode => {
    // console.log('app.tsx pageName',pageName);
    switch (pageName) {
      case AppPages.START_PAGE:
        return <StartPage />

      case AppPages.CHAPTER_PAGE:
        return <ChapterPage />;

      case AppPages.GAME_PAGE:
        return <GamePage />;

      case AppPages.SOURCE_PAGE:
        return <SourcePage />;

      case AppPages.ABOUT_PAGE:
        return <AboutPage />;

      default:
        return <StartPage />
    }
  }

  render() {
    return (
      <TransitionGroup className="App">

        <CSSTransition
          key={this.props.pageName}
          in={true}
          appear={true}
          timeout={1200}
          classNames="fade"
        >
          {this.renderPage(this.props.pageName)}
        </CSSTransition>

        <AudioPlayer music={this.props.music} mute={false} />
        {/*<AudioPlayer key={new Date} music={this.props.music} /> */}
      </TransitionGroup>
    );
  }

}

const mapStateToProps = (allState: { gameState: IState }) => ({
  pageName: allState.gameState.pageName,
  music: allState.gameState.music,
});

export default connect(mapStateToProps)(App);
