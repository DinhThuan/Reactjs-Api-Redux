import React from "react";
import Menu from "./components/Menu/Menu";
import routes from "./routes";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
   showContentMenus = routes => {
      let result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
               />
            );
         });
      }
      return <Switch>{result}</Switch>;
   };
   render() {
      return (
         <Router>
            <div className="App">
               <Menu></Menu>
               <div className="container">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="mt-4">
                           {this.showContentMenus(routes)}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Router>
      );
   }
}

export default App;
