import React from 'react'
import Container from '../../components/container'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Container>
        <div className='mt-4 mb-4'>
          <h1 className="text-3xl font-bold mb-4">Bem vindo ao blog</h1>
          <p className='mb-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita quisquam voluptate inventore sint laboriosam nemo sapiente ea quae quam exercitationem placeat, tempora veritatis repudiandae eius eum nisi recusandae, dolorem porro?</p>
          <Image 
            className='w-full px-4'
            alt='Imagem Hero' 
            src="/images/jm-2katanas-4-full-hd.jpg" 
            width={300} 
            height={200}
          />
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col">
            <Link href='/blog/post'>
              <Image
                className='w-full mb-4'
                src="/images/jm-2katanas-4-full-hd.jpg"
                width={300}
                height={200}
                alt='primeiro-post'
                />
            </Link>
            <span className="text-pink-900 mb-4">Tag</span>
            <Link href='/blog/post'>
              <h2 className="text-xl font-bold mb-4 hover:text-pink-900">Primeiro post</h2>
            </Link>
            <span className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, tempore mollitia? Provident minus asperiores repellendus exercitationem totam optio unde? Modi voluptate excepturi quo officiis optio exercitationem hic vitae deserunt in?</span>
            <span className="text-xs mb-4">21/06/2023</span>
            </div>
        </div>
      </Container>
    </>
  )
}
