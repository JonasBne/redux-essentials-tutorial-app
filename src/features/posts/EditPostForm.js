import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useHistory } from 'react-router-dom'
import { postUpdated, selectPostById } from './postSlice'

export const EditPostForm = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const { postId } = useParams()
  const existingPost = useSelector((state) => selectPostById(state, postId))

  const [title, setTitle] = useState(existingPost.title)
  const [content, setContent] = useState(existingPost.content)

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleContentChange = (evt) => {
    setContent(evt.target.value)
  }

  const handleSavePost = () => {
    if (title && content) {
      dispatch(
        postUpdated({
          id: postId,
          title,
          content,
        })
      )
      history.push(`/posts/${postId}`)
    }
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
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
      </form>
      <Link className="button muted-button" to={`/posts`}>
        Cancel
      </Link>
      <button type="button" onClick={handleSavePost}>
        Save Post
      </button>
    </section>
  )
}
