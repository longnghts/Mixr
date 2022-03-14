import './App.css';
import Home from './Views/Home';
import Nav from './components/Nav';
import OneDrink from './Views/OneDrink';
import User from './Views/User';
import { Router } from '@gatsbyjs/reach-router';
import About from './Views/About';
import Facts from './Views/Facts';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <About path="/about" />
        <Facts path="/facts" />
        <Home path="/" />
        <OneDrink path='/:drinkID' />
        <User path="user" />
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
