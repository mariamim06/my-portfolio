
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
import Project1 from './MyProjects/Project1/Project1';
import Project2 from './MyProjects/Project2/Project2';
import Project3 from './MyProjects/Project3/Project3';
import Dashboard from './Shared/Dashboard/Dashboard';
import Main from './Home/Main/Main';

function App() {
  return (
    <div className="app">
      <Router>
      {/* <Header></Header> */}
      
      {/* <Dashboard></Dashboard> */}
        <Switch>
        <Route exact path="/">
        <Main></Main>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/main">
            <Main></Main>
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
          <Route path="/project1">
          <Project1></Project1>
          </Route>
          <Route path="/project2">
          <Project2></Project2>
          </Route>
          <Route path="/project3">
          <Project3></Project3>
          </Route>
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
