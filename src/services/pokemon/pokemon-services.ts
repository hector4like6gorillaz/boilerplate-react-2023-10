import { IPokeInfo } from 'src/interfaces/pokemon-interface'
import { SERVICE } from '../config'

const getPokemonById = async (id?: number | string) => {
  const results = await SERVICE().get(`/pokemon/${id ? id : 150}`)
  const { data } = results
  return data as IPokeInfo
}

export { getPokemonById }
