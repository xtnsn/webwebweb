"use client"

import { useEffect, useRef } from "react"

interface YouTubeEmbedProps {
  videoId: string
  title?: string
}

export function YouTubeEmbed({ videoId, title = "YouTube video player" }: YouTubeEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Create responsive container for the iframe
    if (containerRef.current) {
      const container = containerRef.current
      container.style.position = "relative"
      container.style.paddingBottom = "56.25%" // 16:9 aspect ratio
      container.style.height = "0"
      container.style.overflow = "hidden"

      // Create and append the iframe
      const iframe = document.createElement("iframe")
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.src = `https://www.youtube.com/embed/${videoId}`
      iframe.title = title
      iframe.frameBorder = "0"
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      iframe.allowFullscreen = true
      iframe.style.position = "absolute"
      iframe.style.top = "0"
      iframe.style.left = "0"
      iframe.style.width = "100%"
      iframe.style.height = "100%"
      iframe.loading = "lazy"

      container.appendChild(iframe)

      // Cleanup function
      return () => {
        if (container.contains(iframe)) {
          container.removeChild(iframe)
        }
      }
    }
  }, [videoId, title])

  return <div ref={containerRef} className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-xl" />
}

