import React from 'react';
import Head from '../app/layout/head';
import styles from '../styles/Home.module.css';
import Footer from '../app/layout/footer';
import Header from '../app/layout/header';
import HeroCard from '../app/layout/heroCard';
import ListPostsCards from '../app/layout/listPostsCards';
import { Post } from '../app/interfaces/post';
import { Hero } from '../app/interfaces/hero';
import { getAllPosts, getHero } from '../lib/datocms';

type Props = {
  
  title: string;
  latestPosts: Post[];
  mostViewedPosts: Post[];
  hero: Hero;
  data: any;
}

export async function getStaticProps() {

  const dataPosts = await getAllPosts();
  const dataHero = await getHero();
  const title = 'BLOG';
  const latestPosts = dataPosts.allPosts;
  const mostViewedPosts = dataPosts.allPosts;
  const hero = dataHero.hero;

  return {
    props: {
      title,
      latestPosts,
      mostViewedPosts,
      hero,
      data: dataHero,
    },
  }
}

export default function Home(props: Props) {

  const title = props.title;
  const mostViewedPosts = props.mostViewedPosts;
  const latestPosts = props.latestPosts;
  const hero = props.hero;

  return (
    <>
      <Head title={title}/>
      <Header/>
      <main>
        <div className='container'>
          <h1>
            {title}
          </h1>
        </div>
        <HeroCard hero={hero}/>
          <ListPostsCards title='Postagens mais vistas!' posts={mostViewedPosts}/>
          <ListPostsCards title='Últimas Postagens!' posts={latestPosts}/>
      </main>
      <Footer/>
    </>
  )
}
