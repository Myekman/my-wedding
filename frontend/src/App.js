import styles from '../src/App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import NotFound
from './components/NotFound';
import { Route, Switch } from "react-router-dom";
import SignUpForm from './pages/auth/SignupForm';
import SigninForm from './pages/auth/SigninForm';
// import "./api/axiosDefaults";
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const { data } = await axios.get("dj-rest-auth/user/");
      setCurrentUser(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleMount();
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
        <div className={styles.App}>
          < NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SigninForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route render = {() => <NotFound/>} />
            </Switch>
          </Container>
        </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  );
}

export default App;