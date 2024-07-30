import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphone";
import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";
// import { useNavigate } from "react-router-dom";

export const HeadphoneLink = ({ id }) => {
  const { name } = useSelector((state) => selectHeadphoneById(state, id)) || {};

  //   const navigate = useNavigate();

  if (!name) {
    return null;
  }

  return (
    <div>
      {/* <button onClick={() => navigate(id)}>To - {name}</button> */}
      <NavLink
        className={({ isActive }) => isActive && styles.activeLink}
        to={id}
      >
        {({ isActive }) => (isActive ? <span>current - {name}</span> : name)}
      </NavLink>
    </div>
  );
};
