import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import classNames from "classnames";

export const HeadphoneLink = ({ id, name }) => {
  if (!name) {
    return null;
  }

  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          classNames(styles.link, isActive && styles.activeLink)
        }
        to={id}
      >
        {name}
      </NavLink>
    </div>
  );
};
