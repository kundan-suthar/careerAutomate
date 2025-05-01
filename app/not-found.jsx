import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className='container mx-auto mt-24 mb-20 grid gap-2 place-content-center text-center'>
            <h1 className='text-9xl font-black gradient-title'>404</h1>
            <h2 className='text-5xl font-bold'>not found</h2>
            <p className='text-2xl font-bold tracking-tight mb-10'>oops! the page you are looking for dosent exist or has been moved.</p>
            <Link href={'/'}>
                <Button>
                    Retrun Home
                </Button>
            </Link>
        </div>
    )
}

export default NotFound
