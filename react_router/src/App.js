import './App.css';
import {Home} from './Home';
import {Contact} from './Contact';
import {Blog} from './Blog';
import { Navbar } from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/contact' component={Contact} ></Route>
        <Route path='/blog' component={Blog} ></Route> 
      </Switch>
      </Router>
    </div>
  );
}

export default App;
