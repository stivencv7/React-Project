import React from 'react'
import { TitlePage } from '../../UI/TitlePage/TitlePage'

export const Section_RickAnd_Morty = ({ value, action, id }) => {
  return (
    <div>
      <input value={value} onKeyDown={action} type="url" id={id} />
    </div>
  )
}
