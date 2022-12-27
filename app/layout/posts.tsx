import React from 'react'
import { Post } from '../interfaces/post'
import { Author } from '../interfaces/author'

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
                    post.author,
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
                            <h3>{post.author?.name}</h3>
                            <span>{post.description}</span>
                        </div>
                    )
                }
            )
        }
    </div>
  )
}
