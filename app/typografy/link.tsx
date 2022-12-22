import React from 'react'
import NextLink from 'next/link'

type Props = {
  href: string
  children: React.ReactNode
}

export default function Link({ href, children }: Props) {
  return (
    <NextLink href={href}>
        {children}
    </NextLink>
  )
}
