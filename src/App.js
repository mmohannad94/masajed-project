import Home from "./pages/home";
import masajed from "./pages/Masajed";
import PageNotFound from "./pages/PageNotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Routes from './Router';

function App() {
  return (
    <Router>
        <div>
            
            <Switch>
                {Routes.map((e,index)=>(
                    <Route key={'page-'+index} exact path={e.link} children={e.component}/>
                ))}

                <Route key={'page-noMatch'} exact path="*" >
                    <Redirect to="/error"/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
