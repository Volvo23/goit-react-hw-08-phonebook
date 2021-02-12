import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/operation/authOperation";
import s from "./LoginPage.module.css";

const initialState = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [state, setState] = useState({ ...initialState });
  const dispatch = useDispatch();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(logIn(state));
    setState({ ...initialState });
  };

  return (
    <div>
      <h1>Login</h1>

      <form onSubmit={submitHandler} className={s.form}>
        <label className={s.label}>
          Email
          <input
            type="email"
            name="email"
            value={state.email}
            onChange={changeHandler}
            className={s.mail}
          />
          Password
          <input
            type="password"
            name="password"
            value={state.password}
            onChange={changeHandler}
            className={s.password}
          />
        </label>

        <button className={s.insert} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
