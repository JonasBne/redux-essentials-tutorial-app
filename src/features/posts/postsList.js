import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PostAuthor } from './PostAuthor'

export const PostsList = () => {
  const posts = useSelector((state) => state.posts)

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {posts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <PostAuthor userId={post.userId} />
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <Link className="button muted-button" to={`/posts/${post.id}`}>
            View
          </Link>
          <Link className="button muted-button" to={`/posts/${post.id}/edit`}>
            Edit
          </Link>
        </article>
      ))}
    </section>
  )
}
