import Image from 'next/image'
import React from 'react'

export default function Hero() {
  return (
    <div className="mb-4">
      <h2 className="text-3xl font-bold uppercase mb-4">Bem-vindo ao meu reino</h2>
      <div className="mb-4 flex justify-center">
        <Image alt='hero image' src='/images/jm-retratodemonio-blend-0000low.jpg' width={300} height={175} />
      </div>
      <span className="mb-4">
        Entre que eu te dominarei
      </span>
    </div>
  )
}
