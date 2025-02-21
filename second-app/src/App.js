import logo from "./logo.svg";
import "./App.css";
import Train from "./Components/Train";
import IsLoggedIn from "./Components/IsLoggedIn";
import AreaOfRectangle from "./Components/AreaOfRectangle";
import AreaOfCircle from "./Components/AreaOfCircle";
import CardInfo from "./Components/CardInfo";
import ChangeColor from "./Components/ChangeColor";
import PrintTable from "./Components/PrintTable";

function App() {
  return (
    <div className="App">
      {true && <h1>Hello</h1>}
      {/* Short circuiting technique */}
      <hr />
      <PrintTable />
      <hr />
      <ChangeColor />
      <hr />
      <CardInfo />
      <hr />
      <AreaOfCircle />
      <hr />
      <AreaOfRectangle />
      <hr />
      <IsLoggedIn />
      <hr />
      <Train trainId={101} trainName="Rajdhani Express" />
      <Train />
      <Train trainId={102} trainName="Mumbai Express" />
    </div>
  );
}

export default App;
