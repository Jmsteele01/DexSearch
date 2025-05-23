import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import "./Nav.css"

export default function Nav() {
  return (
    <nav className={styles.mainNav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dex Search</Link>
        </li>
      </ul>
    </nav>
  );
}
