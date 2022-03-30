import logo from './logo.svg';
import './App.css';
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
import ParentFunctionalClass from "./components/ParentFunctionalClass";

function App() {
  return (
    <div className="App">
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
      <ParentComponent/>
      <ParentFunctionalClass/>
    </div>
  );
}

export default App;
