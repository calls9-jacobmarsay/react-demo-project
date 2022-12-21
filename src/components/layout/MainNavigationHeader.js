import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigationHeader = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>

      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes">All Quotes</NavLink>
          </li>
          <li>
            <NavLink to="/quotes/create">Create Quotes</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigationHeader;
