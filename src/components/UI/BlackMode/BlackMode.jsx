import React from 'react'

export const BlackMode = ({ action, desabled }) => {
  return (
    <input id='input_color' disabled={desabled} type="color" onChange={action} />
  )
}
