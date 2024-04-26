// import AppNav from "../components/AppNav";
import Maps from "../components/Map/Maps";
import Sidebar from "../components/Sidebar/Sidebar";

import styles from "./AppLayout.module.css";
function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Maps />
    </div>
  );
}

export default AppLayout;
