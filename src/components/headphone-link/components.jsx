import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
import classNames from "classnames";

export const HeadphoneLink = ({ id }) => {
  const { name } = useSelector((state) => selectHeadphoneById(state, id)) || {};

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
