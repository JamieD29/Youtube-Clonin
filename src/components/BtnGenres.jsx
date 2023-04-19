import React from 'react'
import genresStyle from './scss/Genres/Genres.module.scss'
const BtnGenres = ({name}) => {
  return (
    <button className={`${genresStyle["genres-btn"]}`}>
      {name}
    </button>
  )
}

export default BtnGenres