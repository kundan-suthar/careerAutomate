"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
    const imageRef = useRef(null)
    useEffect(() => {
        const imageElement = imageRef.current;
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrollThreshold = 100;
            console.log(scrollPosition)
            if (scrollPosition > scrollThreshold) {
                imageElement.classList.add("scrolled")
            } else {
                imageElement.classList.remove("scrolled")
            }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <section className='w-full pt-36 md:pt-48 pb-10'>
            <div className='space-y-6 text-center'>
                <div className='space-y-6 mx-auto '>
                    <h1 className='gradient-title text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl'>
                        Your AI career coach for <b />
                        Professional courses
                    </h1>
                    <p className='mx-auto max-w-[600] text-muted-foreground md:text-xl'>
                        Advance your career with personalized guidance, Interview prep, and AI powered tools for job success
                    </p>
                </div>
                <div className='flex justify-center space-x-4'>
                    <Link href="/dashboard">
                        <Button size="lg" className={"px-8"}>
                            Get Started
                        </Button>
                    </Link>
                    {/* todo: add url of online video */}
                    <Link href="/demo">
                        <Button size="lg" variant={"outline"} className={"px-8"}>
                            watch Demo
                        </Button>
                    </Link>
                </div>
                <div className='hero-image-wrapper mt-5 md:mt-0'>
                    <div ref={imageRef} className='hero-image w-full max-w-5xl mx-auto'>
                        <Image
                            src={"/banner.jpeg"}
                            width={1280}
                            height={720}
                            alt="bannner image"
                            className='rounded-lg shadow-2xl border mx-auto  w-full h-auto'
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection
