'use client'

import React from 'react'

import { Search } from '@/assets/icons'

import { Input } from '@/components/ui'

interface SearchBarProps {
  value: string
  onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const SearchBar = (props: SearchBarProps) => {
  const { value, onChange } = props

  const inputRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'k' && inputRef.current) {
        e.preventDefault()
        inputRef.current.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div className='relative w-full'>
      <Search className='absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-500' />
      <Input
        type='search'
        value={value}
        onChange={onChange}
        placeholder='Search a post, a topic, a keyword...'
        className='rounded-2xl py-7 pl-12 pr-12'
        ref={inputRef}
      />
      <span className='absolute bottom-0 right-8 top-0 my-auto h-6 w-6 text-gray-500 z-[-1]'>
        ctrl+k
      </span>
    </div>
  )
}
