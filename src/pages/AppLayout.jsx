// import AppNav from "../components/AppNav";
import Maps from "../components/mapInit/Maps";
import Sidebar from "../components/sidebar/Sidebar";
import User from "../components/user/User";

import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Maps />
      <User />
    </div>
  );
}

export default AppLayout;
