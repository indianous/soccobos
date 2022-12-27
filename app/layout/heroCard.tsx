import React from 'react'
import { Hero } from '../interfaces/hero';
import Link from '../typografy/link';

type Props = {
  hero: Hero;
}

export default function HeroCard(props: Props) {
  const hero = new Hero(
      props.hero.title,
      props.hero.content,
    )

  return (
    <div className='px-4 py-5 my-5 text-center border container rounded'>
      <h2 className='display-5 fw-bold'>{hero.title}</h2>
      <div className='col-lg-6 mx-auto'>
        <p className='lead mb-4'>{hero.content}</p>
        <div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
          <Link href='#' className='btn btn-primary btn-lg px-4 gap-3'>
            Clique Aqui!
          </Link>
        </div>
      </div>
    </div>
  )
}
