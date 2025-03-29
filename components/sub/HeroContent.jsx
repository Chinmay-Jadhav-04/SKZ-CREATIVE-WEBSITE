"use client"

import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import Link from 'next/link'

const HeroContent = () => {
  return (
    <motion.div
    initial="hidden"
    animate="visible"
    className="flex flex-col items-center justify-center px-20 mt-40 w-full z-[20]"
    >
        <div className="h-full w-full flex flex-col items-center justify-center gap-5 text-center">
            <motion.div
            variants={slideInFromTop}
            >
                <Link 
                  href="https://sanskariezzz.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity"
                >
                    <SparklesIcon className="text-[#9bfffa] mr-[10px] h-5 w-5"/>
                    <h1 className="Welcome-text text-[13px]">
                        SANSKARIEZZZ
                    </h1>
                </Link>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] text-center"
            >
                <span>
                Unleashing Creativity
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"> with SKZ Creative </span>
                 – Where Ideas Come to Life!
                </span>
            </motion.div>

            <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-gray-400 my-5 max-w-[600px] text-center"
            >
             We help you to build website for your company that is Modern, User-friendly which has good SEO&apos;s, and Clean designs.
             Check out our project.
            </motion.p>

            <Link 
              href="#about" 
              scroll={true}
              className="z-[50]"
            >
              <motion.div
                variants={slideInFromLeft(1)}
                className="py-4 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
              >
                Learn More!
              </motion.div>
            </Link>
        </div>
        <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center mt-10"
        >
            <Image 
            src="/Soc.webp"
            alt="work icons"
            height={650}
            width={650}
            />
        </motion.div>

    </motion.div>
  )
}

export default HeroContent
