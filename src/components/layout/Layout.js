import classes from "./MainNavigation.module.css";
import MainNavigationHeader from "./MainNavigationHeader";
const Layout = (props) => {
  return (
    <div>
      <MainNavigationHeader />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
