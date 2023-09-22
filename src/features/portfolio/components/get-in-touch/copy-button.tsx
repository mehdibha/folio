"use client"

import React from "react"
import { CheckCircle, Copy } from "@/assets/icons"
import { Button, Toaster, useToast } from "@/components/ui"

export const CopyButton = () => {
  const { toast } = useToast()
  const handleClick = () => {
    toast({
      description: (
        <div className="flex items-center space-x-4">
          <CheckCircle /> <span>Email copied</span>
        </div>
      ),
    })
  }
  return (
    <>
      <Button variant="ghost" size="icon" onClick={handleClick}>
        <Copy />
      </Button>
      <Toaster />
    </>
  )
}
