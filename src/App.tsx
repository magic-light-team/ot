import React from 'react';
import './App.css';

import { connect } from 'react-redux';
import { IState } from './reducers/initialState';

import { AppPages } from './info/pages';
import StartPage from './components/startPage';
import ChapterPage from './components/chapterPage';
import SourcePage from './components/sourcePage';
import AboutPage from './components/aboutPage';

interface StateProps {
  pageName: string,
}

interface DispatchProps {
}

class App extends React.Component<StateProps & DispatchProps, any> {

  renderPage = (pageName: string): React.ReactNode => {
    // console.log('app.tsx pageName',pageName);
    switch (pageName) {
      case AppPages.START_PAGE:
        return <StartPage />

      case AppPages.Chapter_PAGE:
        return <ChapterPage />;

      // case "gamePage":
      //   return <GamePage />;

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
      <div className="App">
        {this.renderPage(this.props.pageName)}
        {/* <AudioPlayer /> */}
      </div>
    );
  }

}

const mapStateToProps = (allState: { gameState: IState }) => ({
  pageName: allState.gameState.pageName
});

export default connect(mapStateToProps)(App);
