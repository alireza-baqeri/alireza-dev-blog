'use client'

import { motion } from 'framer-motion'
import Link from '@/components/Link'

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center py-8 pt-10 pb-12 text-center md:pt-16 md:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
          Hi, I'm <span className="text-primary-500">Alireza</span>
        </h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 max-w-2xl text-lg leading-7 text-gray-500 dark:text-gray-400"
      >
        A Computer Engineering graduate, Front-End Developer, and AI Researcher. I build modern,
        performant web applications and explore intelligent AI models.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex space-x-4"
      >
        <Link
          href="/about"
          className="bg-primary-500 hover:bg-primary-600 rounded-full px-6 py-3 text-sm font-semibold text-white transition-colors"
        >
          More About Me
        </Link>
        <Link
          href="/blog"
          className="rounded-full bg-gray-200 px-6 py-3 text-sm font-semibold text-gray-900 transition-colors hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
        >
          Read the Blog
        </Link>
      </motion.div>
    </div>
  )
}
