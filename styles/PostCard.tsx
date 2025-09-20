import React from 'react'

interface PostCardProps {
  title: string
  content: string
  image?: string
}

const PostCard = ({ title, content, image }: PostCardProps) => {
  return (
    <div className="post-card">
      {image && <img src={image} alt={title} />}
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  )
}

export default PostCard
