import { Link } from "react-router-dom";
import "./AppHeader.css";

function AppHeader() {
  return (
    <header className="app-header">
      <Link className="app-header-item" to="/">
        Home
      </Link>
      <Link className="app-header-item" to="/">
        contact
      </Link>
      <Link className="app-header-item" to="/">
        Product
      </Link>
    </header>
  );
}
