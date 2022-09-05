import React from 'react'

interface ThumbnailProps {
  src: string;
}

export const BookThumbnail = (props:ThumbnailProps) => {
  return (
    <div>
      <img src={props.src} alt="img"/>
    </div>
  )
}
