import React from 'react';
import Head from '../app/layout/head';
import styles from '../styles/Home.module.css';
import Footer from '../app/layout/footer';
import Header from '../app/layout/header';
export default function Home() {
  const title = 'blog';
  return (
    <>
      <Head title={title}/>
      <Header/>
      <main>
        <h1>
          {title}
        </h1>
        {/* {Hero} */}
        <div>Hero</div>
        {/* {Posts mais recentes} */}
        <div>Posts recentes</div>
        {/* {Posts mais vistos} */}
        <div>Posts mais vistos</div>
      </main>
      <Footer/>
    </>
  )
}
