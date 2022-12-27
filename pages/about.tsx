import React from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import Footer from '../app/layout/footer';
import Head from '../app/layout/head';
import Header from '../app/layout/header';
import { getAbout } from '../lib/datocms';
import styles from '../styles/Home.module.css';

async function markdownToHtml(content: string){
  const result = await remark().use(remarkHtml).process(await content);
  return result.toString();
}

export async function getStaticProps(){
  const data = await getAbout();
  const article = data.about.content;
  const content = await markdownToHtml(article || '');
  const title = data.about.title;
  return {
    props: {
      title,
      content,
    },
  }
}

type Props = {
  title: string;
  content: string;
}

export default function About(props: Props) {
  const title = props.title;
  const content = props.content;
  return (
    <>
    <Head title={title}/>
    <Header/>
      <main>
        <h1>
          {title}
        </h1>
        <article>
          <div dangerouslySetInnerHTML={{__html: content || ''}}/>
        </article>
      </main>
      <Footer/>
    </>
  )
}
