import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  console.log('users', users)

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleContentChange = (evt) => {
    setContent(evt.target.value)
  }

  const handleAuthorChange = (evt) => {
    setUserId(evt.target.value)
  }

  const handleAddPost = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId))

      setTitle('')
      setContent('')
    }
  }

  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ))

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={handleAuthorChange}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={handleTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={handleContentChange}
        />
        <button type="button" onClick={handleAddPost} disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  )
}
