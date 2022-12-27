import React from 'react';
import Head from '../app/layout/head';
import Header from '../app/layout/header';
import Footer from '../app/layout/footer';
import ListPostsCards from '../app/layout/listPostsCards'
import { Post } from '../app/interfaces/post';
import { getAllPosts } from '../lib/datocms';


// declaração de tipos
type Props = {
  title: string;
  filterList: Array<{id: string, description: string}>;
  posts: Post[];
  nextPages: {pages: number[], currentPage: number}
}

// atribuição de valores
export async function getStaticProps (){
  const data = await getAllPosts();
  const title = 'Todos os Posts';
  const filterList = [
    {id: '1', description: 'Mais recentes'},
    {id: '2', description: 'Menos recentes'}
  ];
  const posts = data.allPosts;
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

export default function Posts(props: Props) {
  const title = props.title;
  const filterList = props.filterList;
  const posts = props.posts;
  const nextPages = props.nextPages;
  
  return (
    <>
      <Head title={title}/>
      <Header/>
      <main>
        <header>
          <div>
            <label htmlFor='filterList'>Filtros</label>
            <select name="filter" id="filterList" className='form-select'>
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
          </div>
        </header>
        <main>
          <ListPostsCards posts={posts}/>
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
