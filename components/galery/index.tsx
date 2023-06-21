import Image from 'next/image'
import React from 'react'

export default function Galery() {
  return (
    <div className="mb-4">
      <h2 className="text-2xl mb-4">Minha galeria</h2>
      <div className="mb-4">
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jm-retratodemonio-blend-0000low.jpg" width={350} height={200} alt='imagem'/>
        </div>
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jm-2katanas-4-full-hd.jpg" width={350} height={200} alt='imagem'/>
        </div>
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jm-2katanas-5-full-hd.jpg" width={350} height={200} alt='imagem'/>
        </div>
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jm-2katanas-7-full-hd.jpg" width={350} height={200} alt='imagem'/>
        </div>
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jm-eevee1low.jpg" width={350} height={200} alt='imagem'/>
        </div>
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jm-editada.jpg" width={350} height={200} alt='imagem'/>
        </div>
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jtae-me-jm-seannoanimacion2-blend-0001-121513.jpg" width={350} height={200} alt='imagem'/>
        </div>
        <div className="flex justify-center">
          <Image className='mb-4' src="/images/jtae-me-jm-seannoanimacion2-blend-0002-121604.jpg" width={350} height={200} alt='imagem'/>
        </div>
      </div>
    </div>
  )
}
