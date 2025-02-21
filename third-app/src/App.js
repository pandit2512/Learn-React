import logo from "./logo.svg";
import "./App.css";
import Parent from "./Components/Parent";
import EffectExample from "./Components/EffectExample";
import GithubApi from "./Components/GithubApi";

function App() {
  return (
    <div className="App">
      <GithubApi />
      <hr />
      <EffectExample />
      <hr />
      <Parent data="XYZ" />
    </div>
  );
}

export default App;
