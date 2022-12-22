import React from 'react';
import Head from '../app/layout/head';
import Header from '../app/layout/header';
import Footer from '../app/layout/footer';

type Props = {
  title: string;
  filterList: Array<{id: string, description: string}>;
}

export function getStaticProps (){
  const title = 'Todos os Posts';
  const filterList = [
    {id: '1', description: 'Mais recentes'},
    {id: '2', description: 'Menos recentes'}
  ]
  return {
    props: {
      title,
      filterList,
    }
  }
}

export default function Posts({ title, filterList }: Props) {
  return (
    <>
      <Head title={title}/>
      <Header/>
      <main>
        <header>
          <span>Filtros</span>
          <select name="filter" id="filterList">
            {filterList.map((filterItem, index) => {
              return (<option key={index} value={filterItem.id}>
                {filterItem.description}
              </option>)
              })
            }
          </select>
        </header>
        {/* {lista de posts} */}
        Lista dos posts
        <footer>
          {/* {lista de páginas} */}
          Quantidade de Páginas
        </footer>
      </main>
      <Footer/>
    </>
  )
}
