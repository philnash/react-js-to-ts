import logo from "./logo.svg";
import "./App.css";
import JokeGenerator from "./components/JokeGenerator";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <JokeGenerator />
      </header>
    </div>
  );
}

export default App;
