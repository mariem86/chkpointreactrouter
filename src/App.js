import React  from "react";
import { BrowserRouter as Router, Route, Switch, Link ,Redirect} from "react-router-dom";
import Home from "./nav component/Home";
import Category from "./nav component/Category";
import Products from "./nav component/Products";
 import Login from "./nav component/Login"
import Adminarea from "./nav component/Adminarea"
import { fakeAuth } from './nav component/Login';
import "./App.css";

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar ">
          <ul className="navlink">
            <li>
              <Link style={{ color: "blanchedalmond" }} to="/">
                Homes
              </Link>
            </li>
            <li>
              <Link style={{ color: "blanchedalmond" }} to="/category">
                Category
              </Link>
            </li>
            <li>
              <Link style={{ color: " blanchedalmond" }} to="/products">
                Products
              </Link>
            </li>
            <li><Link style={{ color: " blanchedalmond" }} to="/Adminarea">
            Adminarea
              </Link></li>
          </ul>
        </nav>
        <Switch>
  <Route exact path="/" component={Home} />
  <Route path="/category" component={Category}/>
  <Route path="/login" component={Login}/>
  <Route path="/Products" component={Products}/>
  <PrivateRoute   path='/Adminarea' component = {Adminarea} />
</Switch>
      </div>
    </Router>
  );
};


const PrivateRoute = ({component: Component, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />} />
  )
}
export default App;

