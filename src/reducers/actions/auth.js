import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut} from 'firebase/auth';
import Swal from 'sweetalert2';

import { googleAuthProvider } from '../../firebase/firebaseConfig';
import { types } from '../types/types';
import { noteLogout } from './notes';
import { finishLoading, startLoading } from './ui';
 
export const startLoginEmailPassword = (email, password) =>{
  return (dispatch) => {
    dispatch( startLoading() );
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
        .then(async ({user}) => {
            dispatch(
                login(user.uid, user.displayName ));
              })
        .catch((error) => {
            Swal.fire('Error', error.message, 'error');
            dispatch( finishLoading )
          }).finally(() => {
            dispatch( finishLoading ())
          })
};
}
 
export const startGoogleLogin = () =>{
  return (dispatch) =>{
      const auth = getAuth();
      signInWithPopup(auth, googleAuthProvider)
          .then(({user}) =>{
              dispatch(login(user.uid, user.displayName))
          });
  }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return () => {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
              updateProfile(auth.currentUser,{
                  displayName:name
              })
              console.log('Usuario creado');
          })
          .catch((error) => {
            Swal.fire('Error', error.message, 'error');
          });
  }
}

export const login = (uid, displayName) =>(
    {
        type:types.login,
        payload: {
            uid,
            displayName
        }
    }
)

export const logoutAction = () => {
  return async(dispatch) => {
      const auth = getAuth();
      await signOut(auth);
      dispatch( logout() );
      dispatch( noteLogout() );
  }
}


export const logout = () => ({
  type: types.logout
})


