import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

function Maps() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const lng = searchParams.get("lng");

  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <h1>Maps</h1>{" "}
      <h3>
        position : {lat} , {lng}
      </h3>
      <button
        onClick={() => {
          setSearchParams({ lat: 23, lng: 50 });
        }}
      >
        Change Position
      </button>
    </div>
  );
}

export default Maps;
