import styles from '../src/App.module.css';
import NavBar from './components/NavBar';
import Container from "react-bootstrap/Container";
import NotFound
from './components/NotFound';
import { Route, Switch } from "react-router-dom";
import SignUpForm from './pages/auth/SignupForm';
import SigninForm from './pages/auth/SigninForm';
import PostCreateForm from './pages/posts/PostCreateForm';
import "./api/axiosDefaults";
import PostPage from './pages/posts/PostPage';

function App() {
  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route exact path="/" render={() => <h1>Home page</h1>} />
              <Route exact path="/signin" render={() => <SigninForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id" render = {() => <PostPage />} />
              <Route render = {() => <NotFound/>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;