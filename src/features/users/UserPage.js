import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAllPosts } from '../posts/postSlice'
import { selectUserById } from './usersSlice'

export const SinglePostPage = () => {
  const { userId } = useParams()

  const user = useSelector((state) => selectUserById(state, userId))

  const postsForUser = useSelector((state) => {
    const allPosts = selectAllPosts(state)
    return allPosts.filter((post) => post.user === userId)
  })

  const postTitles = postsForUser.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  ))

  return (
    <section>
      <h2>{user.name}</h2>

      <ul>{postTitles}</ul>
    </section>
  )
}
