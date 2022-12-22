import React from 'react'
import { Post } from '../interfaces/post'

type Props = {
    posts: Post[];
}

export default function Posts({posts}: Props) {
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
