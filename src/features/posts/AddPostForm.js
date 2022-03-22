import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectAllUsers } from '../users/usersSlice'
import { addNewPost } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch()

  const users = useSelector(selectAllUsers)

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleContentChange = (evt) => {
    setContent(evt.target.value)
  }

  const handleAuthorChange = (evt) => {
    setUserId(evt.target.value)
  }

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === 'idle'

  const handleAddPost = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(addNewPost({ title, content, user: userId })).unwrap()
        setTitle('')
        setContent('')
        setUserId('')
      } catch (error) {
        console.error(`Failed to save post. Error: ${error}`)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

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
