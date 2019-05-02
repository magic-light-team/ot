import React from 'react';
import './App.css';
import { connect } from 'react-redux';

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
  page:string
}

interface DispatchProps {
}

class App extends React.Component<StateProps & DispatchProps,any> {
  
  renderPage =(page:string):React.ReactNode =>{
    switch (page) {
      case "new":
      return <div></div>
        break;
    
      default:
      return <div></div>
        break;
    }
    return <div></div>
  }
  
  render() {
    return (
      <div className="App">
      state:
      {this.props.page}
      {this.renderPage("")}
        {/* {this.pageContent("new")} */}

      </div>
    );
  }

}

const mapStateToProps = (allState: any) => ({
  page: allState.gameState.page
});

export default connect(mapStateToProps)(App);
