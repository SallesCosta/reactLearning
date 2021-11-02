import React, { PropTypes } from 'react'

export const Search = ({ isDisabled, handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)
