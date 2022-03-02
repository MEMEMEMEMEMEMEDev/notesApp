import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm/useForm"
import { useDispatch, useSelector } from "react-redux";
import { startLoginEmailPassword, startGoogleLogin } from "../../reducers/actions/auth";
import { removeError, setError } from "../../reducers/actions/ui";
import validator from 'validator';


export const LoginScreen = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.ui);
  const { msgError } = useSelector(state => state.ui);

  const [formValues, handleInputChange] = useForm();

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  }

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  }

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError('Email is not valid'))
      return false;
    } else if (password.length < 5) {
      dispatch(setError('Password should be at least 6 characters and match each other'))
      return false
    }

    dispatch(removeError());
    return true;
  }

  return (
    <div className='auth-container__login'>

      <form onSubmit={handleLogin}>
        <h3> BIENVENIDO DE NUEVO! </h3>
        {
          msgError && (
            <div className='auth-err'>
              {msgError}
            </div>
          )
        }
        <input
          type='text'
          placeholder='Correo'
          name='email'
          autoComplete='off'
          className='input-auth'
          value={email}
          onChange={handleInputChange}
        />
        <input
          type='password'
          placeholder='Contraseña'
          name='password'
          autoComplete='off'
          className='input-auth'
          value={password}
          onChange={handleInputChange}
        />
        <button
          type='submit'
          disabled={loading}
          autoComplete='off'
          className='btn-auth'
        >
          ENTRAR
        </button>

        <div className='auth-container__googlebtn'>
          <div
            className="google-btn"
            onClick={handleGoogleLogin}
          >
            <div className="google-icon-wrapper">
              <img className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button"
              />
            </div>
          </div>
        </div>

        <Link
          to='/auth/register'
        >
          No tienes una cuenta?
        </Link>
      </form>
    </div>
  )
}