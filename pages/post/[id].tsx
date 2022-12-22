import React from 'react';
import Footer from '../../app/layout/footer';
import Header from '../../app/layout/header';
import Head from '../../app/layout/head';
import { InterfacePost } from '../../app/interfaces/post';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

type Props = {
  post: InterfacePost;
}

async function markdownToHtml(content: string){
  const result = await remark().use(remarkHtml).process(await content);
  return result.toString();
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: {id: '1'} },
      { params: {id: '2'} },
    ],
    fallback: false,
  }
}

export async function getStaticProps() {
  const post = {
    id: 1,
    title: 'string',
    description: 'string',
    content: await markdownToHtml('# Blog\nEste é um modelo de blog genérico.\n## Pendências\n- Hero\n- Listas de Post\n- Página de visualização do post\n- Layout\n- Tipografia ' || ''),
    // published: new Date,
    // updated: new Date,
  }
  return {
    props: {
      post,
    }
  }  
}

export default function Post({ post }: Props) {
  return (
    <>
      <Head title={post.title}/>
      <Header/>
      <main>
        <h1>{post.title}</h1>
        <p>{post.description}</p>
        <div>
          <div>
            <span>Data da postagem: </span>
            {/* <span>{pst.published.toString()}</span> */}
          </div>
          <div>
            <span>Data da última atualização: </span>
            {/* <span>{pst.updated.toString()}</span> */}
          </div>
        </div>
        <article>
          <div dangerouslySetInnerHTML={{__html: post.content || ''}}/>
        </article>
      </main>
      <Footer/>
    </>
  )
}
