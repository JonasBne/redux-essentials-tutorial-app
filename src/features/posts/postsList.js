import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <Link className="button muted-button" to={`/posts/${post.id}`}>
            View Post
          </Link>
        </article>
      ))}
    </section>
  )
}
