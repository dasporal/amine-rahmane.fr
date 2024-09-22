import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { Image } from 'astro:assets'

export const TooltipComponent = ({ image, content, style }) => {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <TooltipTrigger>
          <img
            src={image.src}
            alt={`${content} logo.`}
            className="w-12 h-12 opacity-0 animate-fade-in-up md:w-24 md:h-24"
            style={style}
          />
        </TooltipTrigger>
        <TooltipContent className="opacity-100">{content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
