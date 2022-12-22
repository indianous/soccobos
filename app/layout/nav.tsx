import React from 'react';
import Link from '../typografy/link';

export default function Nav() {
  return (
    <nav>
      <Link href='/'>Home</Link>
        <li>
            <ul>
                <Link href='/about'>Sobre</Link>
            </ul>
            <ul>
                <Link href='/posts'>Todos os Posts</Link>
            </ul>
        </li>
    </nav>
  )
}
