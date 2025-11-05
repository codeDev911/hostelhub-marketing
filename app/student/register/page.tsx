import React, { Suspense } from 'react'
import ClientComponent from './ClientComponent'

const page = () => {
  return (
    <Suspense>
      <ClientComponent/>
    </Suspense>
  )
}

export default page