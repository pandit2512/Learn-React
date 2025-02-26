import logo from "./logo.svg";
import "./App.css";
import Parent from "./Components/Parent";
import EffectExample from "./Components/EffectExample";
import GithubApi from "./Components/GithubApi";
import GitHubProfile from "./Components/GitHubProfile";
import Counter from "./Components/Counter";
import FormHandler from "./Components/FormHandler";

function App() {
  return (
    <div className="#">
      <FormHandler />
      <hr />
      <Counter />
      <hr />
      <GitHubProfile />
      <hr />
      {/* <GithubApi />
      <hr />
      <EffectExample />
      <hr />
      <Parent data="XYZ" /> */}
    </div>
  );
}

export default App;
