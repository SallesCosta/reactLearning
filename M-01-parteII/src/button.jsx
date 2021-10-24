
import React from 'react'

export const Button = ({ children, handleClick }) => {
  return <button onClick={handleClick}>{children}</button>
}

export const LikeButton = () => {
 return <Button handleClick={() => alert('likeButton')}>Curtir</Button>
}

export const SearchButton = () => {
 return <Button handleClick={() => alert('SearchButton')}>Search Button</Button>
}