import React from 'react'

export default function PokeMonPage({params}: {params: {name: string}}) {
  return (
    <div>
       <h1> PokeMon: {params.name}</h1>
       TODO
    </div>
  )
}
