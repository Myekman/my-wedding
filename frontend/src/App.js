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
import PostsPage from './pages/posts/PostsPage';
import { useCurrentUser } from './context/CurrentUserContext';
import PostEditForm from './pages/posts/PostEditForm';
import ProfilePage from './pages/profiles/ProfilePage';

import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";

import TodoForm from "./pages/todos/TodoForm";
import TodoPage from './pages/todos/TodoPage';
import TodoEdit from "./pages/todos/TodoEdit";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
        <div className={styles.App}>
          <NavBar />
          <Container className={styles.Main}>
            <Switch>
              <Route 
                exact 
                path="/" 
                render={() => ( 
                  <PostsPage message="No results found. Adjust the search keyword" /> 
                )} 
              />
              <Route
                exact
                path="/feed"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or follow a user."
                    filter={`owner__followed__owner__profile=${profile_id}&`}
                  />
                )}
              />
              <Route
                exact
                path="/liked"
                render={() => (
                  <PostsPage
                    message="No results found. Adjust the search keyword or like a post."
                    filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
                  />
                )}
              />
              <Route exact path="/signin" render={() => <SigninForm />} />
              <Route exact path="/signup" render={() => <SignUpForm />} />
              <Route exact path="/posts/create" render={() => <PostCreateForm />} />
              <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
              <Route exact path="/posts/:id" render = {() => <PostPage />} />
              <Route exact path="/profiles/:id" render = {() => <ProfilePage />} />
              
              <Route exact path="/todos/create" render = {() => <TodoForm />} />
              <Route exact path="/todos/:id" render = {() => <TodoPage /> } />
              <Route exact path="/todos/:id/edit" render={() => <TodoEdit />} />

              <Route
                exact
                path="/profiles/:id/edit/username"
                render={() => <UsernameForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit/password"
                render={() => <UserPasswordForm />}
              />
              <Route
                exact
                path="/profiles/:id/edit"
                render={() => <ProfileEditForm />}
              />
              
              <Route render = {() => <NotFound/>} />
            </Switch>
          </Container>
        </div>
  );
}

export default App;