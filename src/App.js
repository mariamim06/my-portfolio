
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import Header from './Shared/Header/Header';
import Wellcome from './Home/Wellcome/Wellcome';
import About from './Home/About/About';
import Projects from './Home/Projects/Projects';
import Blogs from './Home/Blogs/Blogs';
import TargatedProject from './TargatedProject/TargatedProject';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/aboutme">
            <About></About>
          </Route>
          <Route path="/projects">
            <Projects></Projects>
          </Route>
          <Route path="/blogs">
            <Blogs></Blogs>
          </Route>
          <Route path="/targatedProject">
            <TargatedProject></TargatedProject>
          </Route>
          <Route path="/targatedProject/:projectId">
            <TargatedProject></TargatedProject>
          </Route>
          {/* <Route path="/booking/:packageId">
          <TargatedProject></TargatedProject>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </Router>
      {
        
      
      
      /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit save to reload.
        </p>
         <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> }
      </header>  */}
    </div>
  );
}

export default App;
