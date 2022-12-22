import React from 'react';
import Head from '../app/layout/head';
import styles from '../styles/Home.module.css';
import Footer from '../app/layout/footer';
import Header from '../app/layout/header';
import Hero from '../app/layout/hero';
import Posts from '../app/layout/posts';
import { Post } from '../app/interfaces/post';

type Props = {
  title: string;
  latestPosts: Post[];
  mostViewedPosts: Post[];
}

export async function getStaticProps() {
  const title = 'blog';
  // const latestPosts = [new Post(1, 'F', 'F'),new Post(2, 'S', 'S')];
  const latestPosts = [{id: 1, title: 'f', description: 'f'}, {id: 2, title: 's', description: 's'}];
  // const mostViewedPosts = [new Post(3, 'T', 'T'),new Post(4, 'F', 'F')];
  const mostViewedPosts = [{id: 3, title: 't', description: 't'}, {id: 4, title: 'f', description: 'f'}];
  return {
    props: {
      title,
      latestPosts,
      mostViewedPosts
    },
  }
}

// export default function Home({ title, }: Props) {
export default function Home({ title, latestPosts, mostViewedPosts, }: Props) {
  return (
    <>
      <Head title={title}/>
      <Header/>
      <main>
        <h1>
          {title}
        </h1>
        <Hero/>
        <h2>Postagens mais vistas</h2>
        <Posts posts={mostViewedPosts}/>
        <h2>Últimas Postagens</h2>
        <Posts posts={latestPosts}/>
      </main>
      <Footer/>
    </>
  )
}
