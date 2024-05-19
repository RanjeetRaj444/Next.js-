import Link from 'next/link'
import React from 'react'

const F2 = () => {
  return (
    <>
      <h1>F2 page</h1>
      <div><Link href={"/f1"}>F1</Link></div>
    </>
  )
}

export default F2