"use client"

import Image from 'next/image'
import Background from '../../public/images/haus-bg.webp'
import Navbar from './navbar'
import { motion } from 'framer-motion'


export default function Home() {
  return (
    <main className="relative min-h-screen overflow-clip">
      <div className="absolute inset-0 z-10 bg-black/50"></div>
      <div className="absolute inset-0 blur-sm">
        <Image
          src={Background.src}
          alt="background image"
          fill
        />
      </div>
      <Navbar />
      <div className="relative z-10 flex flex-col items-center justify-center pt-12 lg:pt-24 px-12 lg:px-24">
        <motion.h1
          className='text-4xl lg:text-6xl font-body font-normal text-slate-200 max-w-xl'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Something
          </motion.span>
          {' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <b className='font-bold text-accent'>awesome</b>
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            is
          </motion.span>
          {' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            coming
          </motion.span>
          {' '}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5 }}
          >
            <b className='font-bold text-accent'>soon</b>
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <b className='font-bold text-accent'>.</b>
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          className='mt-6 text-lg font-body font-normal leading-8 text-gray-200 max-w-xl'
        >
          RealityHaus enables artists to live broadcast their performances or creation of their artworks in real-time.
          Participants / Observers pay a ticket fee to watch and can live-tip on the final artwork&apos;s value.
          Once completed, the artwork (and the performance) gets added to the initial Event NFT.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 5, duration: 1 }}
          className="w-3/4 h-96 py-6 px-4 lg:px-24 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100/20 rounded-t-lg flex items-center justify-center fixed bottom-0">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 6.5 }}
            className='text-4xl lg:text-6xl font-display font-black text-accent'
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7 }}
            >
              Stay
            </motion.span>
            {' '}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 7.5 }}
            >
              tuned
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 8 }}
            >
              .
            </motion.span>
          </motion.h1>
        </motion.div>
      </div>
    </main>
  )
}
