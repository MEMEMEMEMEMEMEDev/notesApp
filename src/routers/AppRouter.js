import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import { JournalScreen } from "../components/journal/JournalScreen";
import { login } from "../reducers/actions/auth";
import { startLoadingNotes } from "../reducers/actions/notes";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);
        dispatch(startLoadingNotes(user.uid));
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1> Loading... </h1>;
  }

  return (
    <Router>
      <div>
        <Switch>
          {isLoggedIn ? (
            <Route exact path="/" component={JournalScreen} />
          ) : (
            <Route path="/auth" component={AuthRouter} />
          )}

          <Redirect to={isLoggedIn ? "/" : "/auth/login"} />
        </Switch>
      </div>
    </Router>
  );
};
