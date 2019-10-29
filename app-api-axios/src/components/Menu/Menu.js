import React from "react";
import { Route, Link } from "react-router-dom";

const menus = [
   {
      name: "Home",
      to: "/",
      exact: true
   },
   {
      name: "Product Management",
      to: "/product-list",
      exact: false
   }
];

const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
   return (
      <Route
         path={to}
         exact={activeOnlyWhenExact}
         children={({ match }) => {
            let active = match ? "active" : "";
            return (
               <li className={active}>
                  <Link to={to}>{label}</Link>
               </li>
            );
         }}
      />
   );
};

class Menu extends React.Component {
   showMenus = menus => {
      let result = null;
      if (menus.length > 0) {
         result = menus.map((menu, index) => {
            return (
               <MenuLink
                  key={index}
                  label={menu.name}
                  to={menu.to}
                  activeOnlyWhenExact={menu.exact}
               />
            );
         });
      }
      return result;
   };
   render() {
      return (
         <nav className="navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">{this.showMenus(menus)}</ul>
            <form className="form-inline my-2 my-lg-0">
               <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
               />
               <button
                  className="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
               >
                  Search
               </button>
            </form>
            {/* </div> */}
         </nav>
      );
   }
}

export default Menu;
