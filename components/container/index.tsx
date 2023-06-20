import React from 'react'

type Props = {children: React.ReactNode}

export default function Container(props: Props) {
  return (
    <div className="container m-auto px-5">{props.children}</div>
  )
}
