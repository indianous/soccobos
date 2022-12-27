import React from 'react'
import { Post } from '../interfaces/post'
import PostCard from './postCard';

type Props = {
    title?: string;
    posts: Post[];
}

export default function Posts(props: Props) {
    const posts = props.posts;
    const title = props.title;
  return (
    <div className='listPosts container mt-3'>
        <h3>{title}</h3>
        {
            posts.map(
                (post, index) => {
                    return <PostCard key={index} post={post}/>
                }
            )
        }
    </div>
  )
}
