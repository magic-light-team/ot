import React, { ReactNode } from 'react';
import './App.css';
import { connect } from 'react-redux';
import StartPage from './components/startPage'

// const App: React.FC = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

interface StateProps {
  // page: string,
}

interface DispatchProps {
}

class App extends React.Component<StateProps & DispatchProps,any> {
  
  
  render() {
    return (
      <div className="App">
        {this.pageContent("new")}
      </div>
    );
  }
  // :DetailedHTMLProps<HtmlAttributes<HTMLDivElement>,HTMLDivElement>
  // :React.ReactElement
  // :React.ReactNode
  pageContent: React.ReactElement = (page:string) => {
    switch (page) {
       case "startPage":
         // return <StartPage backgroundPic='' />;
         return <div></div>
         // break;

      // case "chapterPage":
      //   return <ChapterPage />;

      // case "gamePage":
      //   return <GamePage />;

      // case "sourcePage":
      //   return <SourcePage />;
      // case "aboutPage":
      //   return <AboutPage />;

      default:
      return <div></div>;
        // return <StartPage />;
        // break;
    }
  }
}

const mapStateToProps = (state: any) => ({
  page: state.state.page
});

export default connect(mapStateToProps)(App);
