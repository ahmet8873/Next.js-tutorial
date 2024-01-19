"use client";
import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";

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
const Links = () => {
  const [open, setOpen] = useState(false);

  // temporary
  const session = true;
  const isAdmin = true;

  return (
    <div>
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
      <button className={styles.menuButton} onClick={() => setOpen(!open)}>
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
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
      )}
    </div>
  );
};

export default Links;
