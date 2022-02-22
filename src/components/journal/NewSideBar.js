import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../reducers/actions/auth";

export default function NewSiderBar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutAction());
  };

  const { name } = useSelector((state) => state.auth);

  return (
    <nav className="journal-nav">
      <h2>
        <i className="fas fa-user-circle" />
        <span> {name} </span>
      </h2>
      <div className="journal-nav__button">
        <button onClick={handleLogout}>
          <i className="fas fa-sign-out-alt" />
        </button>
      </div>
    </nav>
  );
}
