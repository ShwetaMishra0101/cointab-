import logo from "./logo.svg";
import "./App.css";
import Button from "./Components/Button";
import { Route, Routes } from "react-router-dom";
import ShowDetails from "./Pages/ShowDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Button />} />
        <Route path="/details" element={<ShowDetails />} />
      </Routes>
    </div>
  );
}

export default App;