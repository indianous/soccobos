import React from 'react'
import { Post } from '../interfaces/post'

type Props = {
    post: Post
}

export default function PostCard(props: Props) {
    const post = props.post;
  return (
    <div className='card m-2'>
        <div className='card-body'>
            <h5 className='card-title'>{post.title}</h5>
            <p className='card-text'>{post.author?.name}</p>
            <p className='card-text'>{post.description}</p>
        </div>
    </div>
  )
}
