import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" href="/">
        Search
      </Link>
      <Link className="navbar-brand" href="/saved">
        Saved
      </Link>
    </nav>
  );
}

export default NavBar;
