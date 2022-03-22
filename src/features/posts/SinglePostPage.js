import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { selectPostById } from './postSlice'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { useSelector } from 'react-redux'

export const SinglePostPage = () => {
  const { postId } = useParams()

  const post = useSelector((state) => selectPostById(state, postId))

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
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
        <p className="post-content">{post.content}</p>
        <ReactionButtons post={post} />
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
