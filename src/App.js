import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Home/Home/Home';
import Header from './Shared/Header/Header';
import Footer from './Shared/Footer/Footer';

function App() {
  return (
    <div className="">
      <Router>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
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
