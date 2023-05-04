import logo from './logo.svg';
import './App.css';
// import { User, SecondUser } from './User'
import From from './Form'
import Data from './Data'

function App() {
  const name = "Emily";
  const age = 40;

  const clickMe = () => {
    console.log("I got clicked!");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Data />
        <From />
        {/* <User name={name} age={age} function={clickMe}/>
        <SecondUser /> */}
      </header>
    </div>
  );
}

export default App;
