import Head from 'next/head'
import React from 'react'
import Container from '../../components/container'
import Image from 'next/image'
import { Star } from '@phosphor-icons/react'
import Link from 'next/link'

export default function Store() {
  return (
    <>
      <Head>
        <title>Store</title>
      </Head>
      <Container>
        <div className="mt-4 mb-4">
          <h1 className="text-3xl font-bold">Bem-vindo a nossa loja!</h1>
          <p className="mb-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat dolores sequi expedita vitae culpa obcaecati incidunt blanditiis nesciunt natus error quaerat, odio, inventore dolorum eligendi numquam. Id facilis nobis consequatur.</p>
        </div>
        <div className="mb-4 px-4">
          <div className="flex justify-end">
            <span className="border text-xs px-2 py-1 mb-2">10%</span>
          </div>
          <Link href='/store/product'>
            <Image 
              className='w-full mb-2'
              alt='Imagem Hero' 
              src="/images/jtae-me-jm-seannoanimacion2-blend-0001-121513.jpg" 
              width={300} 
              height={200}
            />
            <div className="flex justify-between mb-2">
              <h3 className="font-bold text-xl">Produto</h3>
              <span className="flex gap-x-2">
                <Star size={20} />
                4,5
              </span>
            </div>
            <span className='mb-2'>R$ 200,00</span>
          </Link>
        </div>
      </Container>
    </>
  )
}
