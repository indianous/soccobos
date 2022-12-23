import React from 'react';
import Head from '../app/layout/head';
import styles from '../styles/Home.module.css';
import Footer from '../app/layout/footer';
import Header from '../app/layout/header';
import HeroCard from '../app/layout/heroCard';
import Posts from '../app/layout/posts';
import { Post } from '../app/interfaces/post';
import { Hero } from '../app/interfaces/hero';

type Props = {
  title: string;
  latestPosts: Post[];
  mostViewedPosts: Post[];
  hero: Hero
}

export async function getStaticProps() {
  const title = 'blog';
  const latestPosts = [{id: 1, title: 'f', description: 'f'}, {id: 2, title: 's', description: 's'}];
  const mostViewedPosts = [{id: 3, title: 't', description: 't'}, {id: 4, title: 'f', description: 'f'}];
  const hero = {title: 'Título', description: 'Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.'}
  return {
    props: {
      title,
      latestPosts,
      mostViewedPosts,
      hero,
    },
  }
}

export default function Home(props: Props) {
  const title = props.title;
  const mostViewedPosts = props.mostViewedPosts.map(
    (post) => {
      return new Post(post.id, post.title, post.description, post.content, new Date, new Date);
    }
  );
  const latestPosts = props.mostViewedPosts.map(
    (post) => {
      return new Post(post.id, post.title, post.description, post.content, new Date, new Date);
    }
  );
  const hero = new Hero(props.hero.title, props.hero.description);

  return (
    <>
      <Head title={title}/>
      <Header/>
      <main>
        <h1>
          {title}
        </h1>
        <HeroCard hero={hero}/>
        <div>
          <h2>Postagens mais vistas!</h2>
          <Posts posts={mostViewedPosts}/>
        </div>
        <div>
          <h2>Ultimas Postagens!</h2>
          <Posts posts={latestPosts}/>
        </div>        
      </main>
      <Footer/>
    </>
  )
}
