import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

export const TooltipComponent = ({
  image,
  content,
  style,
}: {
  image: ImageMetadata
  content: string
  style: React.CSSProperties
}) => {
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
