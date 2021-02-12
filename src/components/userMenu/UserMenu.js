import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/operation/authOperation";
// import { getUserName } from "../../redux/selectors/authSelector";
import s from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(logOut());

  return (
    <div className={s.headerr}>
      <img
        src="https://i.ibb.co/QKh1Njr/pngkey-com-funny-png-111267.png"
        alt="avatar-icon"
        width="32"
      />
      <span className={s.welcome}>Welcome</span>
      <button className={s.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
