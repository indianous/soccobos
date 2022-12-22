import React from 'react';
import Head from '../app/layout/head';
import Header from '../app/layout/header';
import Footer from '../app/layout/footer';
import LayoutPosts from '../app/layout/posts'
import { Post } from '../app/interfaces/post';


// declaração de tipos
type Props = {
  title: string;
  filterList: Array<{id: string, description: string}>;
  posts: Array<Post>;
  nextPages: {pages: number[], currentPage: number}
}

// atribuição de valores
export async function getStaticProps (){
  const title = 'Todos os Posts';
  const filterList = [
    {id: '1', description: 'Mais recentes'},
    {id: '2', description: 'Menos recentes'}
  ];
  const posts = [
    { id: 1, title: `Teste ${1}`, description: 'Teste' },
    { id: 2, title: `Teste ${2}`, description: 'Teste' },
  ];
  const nextPages = {
    currentPage: 1,
    pages: [1, 2, 3]
  }
  return {
    props: {
      title,
      filterList,
      posts,
      nextPages,
    }
  }
}

export default function Posts({ title, filterList, posts }: Props) {
  const nextPages = {
    currentPage: 1,
    pages: [1, 2, 3]
  }
  return (
    <>
      <Head title={title}/>
      <Header/>
      <main>
        <header>
          <label htmlFor='filterList'>Filtros</label>
          <select name="filter" id="filterList">
            {
              filterList.map(
                (filterItem, index) => {
                return (
                  <option key={index} value={filterItem.id}>
                    {filterItem.description}
                  </option>)
                }
              )
            }
          </select>
        </header>
        <main>
          <LayoutPosts posts={posts}/>
        </main>
        <footer>
          {
            nextPages.pages.map(
              (page, index) => {
                return (
                  <span key={index}>
                    {page}
                  </span>
                )
              }
            )
          }
        </footer>
      </main>
      <Footer/>
    </>
  )
}
