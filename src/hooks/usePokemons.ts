import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { IPokeInfo } from 'src/interfaces/pokemon-interface'
import { RootState } from 'src/redux/store'
import { getPokemonById } from 'src/services/pokemon/pokemon-services'

export const usePokemons = () => {
  const [pokemon, setpokemon] = useState<null | IPokeInfo>(null)
  const { value } = useSelector((state: RootState) => state.counter)

  useEffect(() => {
    if (value === 0) getPokemonById().then((data) => setpokemon(data))
  }, [])

  useEffect(() => {
    if (value > 0) getPokemonById(value).then((data) => setpokemon(data))
  }, [value])

  const getPokemonByName = (name: string) =>
    getPokemonById(name)
      .then((data) => setpokemon(data))
      .catch(() => console.log('seguro escrbiste mal el nombre'))

  return {
    pokemon,
    getPokemonByName,
  }
}
