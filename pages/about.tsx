import React from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import Footer from '../app/layout/footer';
import Head from '../app/layout/head';
import Header from '../app/layout/header';
import styles from '../styles/Home.module.css';

async function markdownToHtml(content: string){
  const result = await remark().use(remarkHtml).process(await content);
  return result.toString();
}

export async function getStaticProps(){
  const article = '## Lorem Ipsum\n Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet orci augue. Morbi posuere eleifend magna, non imperdiet tortor ornare et. Vivamus sed odio in eros cursus ullamcorper nec sed turpis. Donec faucibus urna vel vehicula laoreet. Quisque tempor mattis molestie. Vivamus accumsan fermentum odio finibus tempus. Morbi pretium odio et quam porta fringilla. Aenean sed mollis metus, a lacinia justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse quam ligula, faucibus at scelerisque ut, tincidunt at dolor. Nullam tincidunt, magna ut vehicula placerat, enim sem elementum nisl, ut elementum nisi purus at lectus. Pellentesque pharetra porta nibh vel commodo. Sed in feugiat tellus. Sed semper mi quis tortor rutrum consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti.';
  const content = await markdownToHtml(article || '');
  const title = 'Sobre'
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

export default function About({title, content}: Props) {
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
