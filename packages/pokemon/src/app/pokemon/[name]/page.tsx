import { Pokemon } from '@/app/components/pokemon/Pokemon'

export default function PokeMonPage({params}: {params: {name: string}}) {

  return (
    <div>
       <h1> Name: {params.name}</h1>
       <Pokemon name={params.name} />
    </div>
  )
}
