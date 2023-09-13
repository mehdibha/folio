"use client"
import React from 'react'
import { useScroll } from '@/hooks'
import { Header } from "./header"

export const HeaderWrapper = () => {
  const { scrolled } = useScroll(0)
  return (
    <Header elevated={scrolled} />
  )
}
