import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { AddPostForm } from './features/posts/AddPostForm'
import { EditPostForm } from './features/posts/EditPostForm'
import { PostsList } from './features/posts/postsList'
import { SinglePostPage } from './features/posts/SinglePostPage'
import { UsersList } from './features/users/UsersList'
import { UserPage } from './features/users/UserPage'
import { NotificationsList } from './features/notifications/NotificationsList'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostsList />
              </React.Fragment>
            )}
          />
          <Route
            exact
            path={'/posts/:postId'}
            render={() => <SinglePostPage />}
          />
          <Route
            exact
            path={'/posts/:postId/edit'}
            render={() => <EditPostForm />}
          />
          <Route exact path={'/users'} render={() => <UsersList />} />
          <Route exact path={'/users/:userId'} render={() => <UserPage />} />
          <Route
            exact
            path={'/notifications'}
            render={() => <NotificationsList />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
