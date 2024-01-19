import React from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";

const Links = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
    {
      name: "Blog",
      path: "/blog",
    },
  ];

  // temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.links}>
      {links.map((link) => {
        return <NavLink item={link} key={link.name} />;
      })}
      {session ? (
        <>
          {isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}
          <button className={styles.logout}>Logout</button>
        </>
      ) : (
        <NavLink item={{ name: "Login", path: "/login" }} />
      )}
    </div>
  );
};

export default Links;
