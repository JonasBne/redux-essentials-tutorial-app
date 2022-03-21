import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { postUpdated } from './posts/postSlice'

export const EditPostForm = () => {
  const dispatch = useDispatch()

  const { postId } = useParams()

  const posts = useSelector((state) => state.posts)
  const existingPost = posts.find((exPost) => exPost.id === postId)

  const [title, setTitle] = useState(existingPost.title)
  const [content, setContent] = useState(existingPost.content)

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleContentChange = (evt) => {
    setContent(evt.target.value)
  }

  const handleSavePost = () => {
    dispatch(
      postUpdated({
        title,
        content,
      })
    )
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
      <button type="button" onClick={handleSavePost}>
        Save Post
      </button>
    </section>
  )
}
