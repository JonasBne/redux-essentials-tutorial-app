import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'

export const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  )

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <Link className="button muted-button" to={'/posts'}>
          Go Back
        </Link>
        <Link className="button muted-button" to={`/posts/${post.id}/edit`}>
          Edit
        </Link>
      </article>
    </section>
  )
}
