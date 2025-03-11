import logo from "./logo.svg";
import "./App.css";
import ToDo from "./Components/ToDo";
import { LoginContextProvider } from "./Login";
import A from "./Components/A";
import Parent from "./Components/Parent";

function App() {
  return (
    <div className="#">
      <LoginContextProvider>
        <ToDo />
        <A />
        <Parent />
      </LoginContextProvider>
    </div>
  );
}

export default App;
