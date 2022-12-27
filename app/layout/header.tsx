import React from 'react';
import Nav from './nav';

export default function Header() {
  return (
    <header className='text-bg-dark'>
      <Nav className='container d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start'/>
    </header>
  )
}
