import React from 'react'
import { Post } from '../interfaces/post'

type Props = {
    posts: Post[];
}

export default function Posts(props: Props) {
    const posts = props.posts.map(
        (post) => {
            return (
                new Post(
                    post.id,
                    post.title,
                    post.description,
                    post.content,
                    new Date,
                    new Date,
                )
            )
        }
    )
  return (
    <div id='listPosts'>
        {
            posts.map(
                (post, index) => {
                    return (
                        <div key={index}>
                            <h2>{post.title}</h2>
                            <span>{post.description}</span>
                        </div>
                    )
                }
            )
        }
    </div>
  )
}
