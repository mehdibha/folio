'use client'

import React from 'react'
import { ChevronsDown } from '@/assets/icons'
import { motion } from 'framer-motion'

export const MouseScrollAnimation = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-1'>
      <div className='flex h-[40px] w-[26px] items-center justify-center rounded-full border border-foreground-secondary'>
        <motion.div
          className='h-[12px] w-[2px] rounded-full bg-foreground-secondary'
          initial={{ opacity: 1, y: -6 }}
          animate={{ y: 0, opacity: 0 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatDelay: 0.3
          }}
        />
      </div>
      <ChevronsDown className='text-foreground-secondary' size={20} />
    </div>
  )
}
