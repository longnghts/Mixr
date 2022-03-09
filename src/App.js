import './App.css';
import Home from './Views/Home';
import Nav from './Views/Nav';
import OneDrink from './Views/OneDrink';
import User from './Views/User';
import { Router } from '@gatsbyjs/reach-router';
import About from './Views/About';
import Facts from './Views/Facts';


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <About path="/about" />
        <Facts path="/facts" />
        <Home path="/" />
        <Profile path='/:drinkID' />
        <User path="user" />
      </Router>
    </div>
  );
}

export default App;
