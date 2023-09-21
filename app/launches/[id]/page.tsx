import { PageProps } from '@/.next/types/app/layout'
import React from 'react'

export default function page({ params }: any) {
  return <div>{params.id}</div>
}
