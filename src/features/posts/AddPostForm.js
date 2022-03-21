import React, { useState } from 'react'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleTitleChange = (evt) => {
    setTitle(evt.target.value)
  }

  const handleContentChange = (evt) => {
    setContent(evt.target.value)
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
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
        <button type="button">Save Post</button>
      </form>
    </section>
  )
}
