import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mb-16 border-t'>
      <div className="flex justify-center">
        <Link href='/privacity' className='px-4 py-2'>
            <span className="hover:text-pink-900">Privacidade</span>
        </Link>
        <Link href='/about' className='px-4 py-2'>
            <span className="hover:text-pink-900">Sobre</span>
        </Link>
        <Link href='/help' className='px-4 py-2'>
            <span className="hover:text-pink-900">Ajuda</span>
        </Link>
      </div>
      <div className="flex justify-center mb-8 border-t">
        <span className="px-4 py-2">
            Todos os direitos reservados - Soccobos
        </span>
      </div>
    </footer>
  )
}
