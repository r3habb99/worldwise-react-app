import Logo from "../Logo/Logo";
import AppNav from "../App-Nav/AppNav";
import styles from "./Sidebar.module.css";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />

      <Outlet />
      <Footer />
    </div>
  );
}

export default Sidebar;
