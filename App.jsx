import { Route } from 'react-router-dom';
import Home from './Home.jsx';
import Login from './Login1.jsx/index.js'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {

  return(
  <>
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </Router> 
    
  </>
   );

}
export default App