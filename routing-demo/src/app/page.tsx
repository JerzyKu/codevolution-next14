import Link from 'next/link'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <>
    <h1>Home Page</h1>
    <Link href='blog'>Blog</Link>
    <Link href='products'>Products</Link>
    </>
  )
}