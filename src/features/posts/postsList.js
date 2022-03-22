import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchPosts, selectAllPosts } from './postSlice'
import { PostAuthor } from './PostAuthor'
import { ReactionButtons } from './ReactionButtons'
import { TimeAgo } from './TimeAgo'
import { useDispatch, useSelector } from 'react-redux'

export const PostsList = () => {
  const dispatch = useDispatch()
  const posts = useSelector(selectAllPosts)

  const postStatus = useSelector((state) => state.posts.status)

  useEffect(() => {
    if (postStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postStatus, dispatch])

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {orderedPosts.map((post) => (
        <article className="post-excerpt" key={post.id}>
          <h3>{post.title}</h3>
          <PostAuthor userId={post.userId} /> <TimeAgo timestamp={post.date} />
          <p className="post-content">{post.content.substring(0, 100)}</p>
          <ReactionButtons post={post} />
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
