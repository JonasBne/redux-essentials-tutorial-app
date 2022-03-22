import React, { useEffect } from 'react'
import { fetchPosts, selectAllPosts } from './postSlice'
import { Spinner } from '../../components/Spinner'
import { PostExcerpt } from './PostExcerpt'
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

  let content

  if (postStatus === 'loading') {
    content = <Spinner text="Loading posts..." />
  }

  if (postStatus === 'failed') {
    content = <div>{posts.error}</div>
  }

  if (postStatus === 'succeeded') {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date))

    content = orderedPosts.map((post) => (
      <PostExcerpt key={post.id} post={post} />
    ))
  }

  return (
    <section className="posts-list">
      <h2>Posts</h2>
      {content}
    </section>
  )
}
