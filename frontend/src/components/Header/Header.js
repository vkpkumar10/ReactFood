import React from "react";
import classes from "./header.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  const user = {
    name: "PradeepKumar",
  };

  const cart = {
    totalcount: 10,
  };

  const logout = () => {};

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <Link to="/" className={classes.logo}>
          Food with React!
        </Link>

        <nav>
          <ul>
            {user ? (
              <li className={classes.menu_container}>
                <Link to="/profile">{user.name}</Link>
                <div className={classes.menu}>
                  <Link to="/Profile">Profile</Link>
                  <Link to="/Orders">Orders </Link>
                </div>
              </li>
            ) : (
              <Link to="/Login">Login</Link>
            )}

            <li>
              <Link to="/Cart">
                Cart
                {cart.totalcount > 0 && (
                  <span className={classes.cart_count}>{cart.totalcount} </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
