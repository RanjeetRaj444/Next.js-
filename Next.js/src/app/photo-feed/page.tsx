import React from 'react'
import wonders from './wonders'
import Link from 'next/link'
import Image from 'next/image'

const Home = () => {
    return (
        <main className='container mx-auto'>
            <h1 className='text-center text-3xl font-bold my-4'>New Wonders of the world</h1>
            <div className='grid grid-cols-4 md:grid-flow-col-4 gap-4 p-2'>
                {wonders.map(({ id, src, name }) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image alt={name} src={src}
                            className='w-full object-cover aspect-square' />
                    </Link>
                ))}
            </div>
        </main>
    )
}

export default Home