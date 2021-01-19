
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route } from "react-router-dom";
import Profile from "./components/Profile"
import Navbar from "./components/Navbar"
// check if footer is rendering


function App() {
  return (
    <div className="App">
      <Router>
        <div className="body">
          <Route exact path="/" component={Profile} />
          <Route exact path="/about" component="about Me" />
          <Route exact path="/projects" component="Projects" />
        </div>
      </Router>

    </div>
  );
}

export default App;
