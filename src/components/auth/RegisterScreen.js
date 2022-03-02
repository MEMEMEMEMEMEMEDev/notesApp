import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { removeError, setError } from "../../reducers/actions/ui";
import { startRegisterWithEmailPasswordName } from "../../reducers/actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm();

  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setError(
          "Password should be at least 6 characters and match each other"
        )
      );
      return false;
    }

    dispatch(removeError());
    return true;
  };

  return (
    <div className="auth-container__register">
      <form onSubmit={handleRegister}>
        <h3> SÓLO UN POCO MÁS! </h3>

        {msgError && <div className="auth-err">{msgError}</div>}

        <input
          type="text"
          placeholder="Nombre"
          name="name"
          autoComplete="off"
          className="input-auth"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="input-auth"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          autoComplete="off"
          className="input-auth"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="confirm password"
          name="Repite tu contraseña"
          autoComplete="off"
          className="input-auth"
          value={password2}
          onChange={handleInputChange}
        />

        <button className="btn-auth">REGISTRATE</button>

        <Link to="/auth/login"> Ya tienes una cuenta? </Link>
      </form>
    </div>
  );
};
