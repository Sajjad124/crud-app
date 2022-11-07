import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
