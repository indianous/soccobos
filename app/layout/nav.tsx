import React from 'react';
import Link from '../typografy/link';

type Props = {
  className?: string;
}

export default function Nav(props: Props) {
  return (
    <nav className={props.className}>
      <Link className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none' href='/'>
        Home
      </Link>
        <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0'>
            <li>
                <Link className='nav-link px-2 text-secondary' href='/about'>Sobre</Link>
            </li>
            <li>
                <Link className='nav-link px-2 text-secondary' href='/all-posts'>Todos os Posts</Link>
            </li>
        </ul>
    </nav>
  )
}
