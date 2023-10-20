import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'
import { BugAntIcon } from '@heroicons/react/24/solid'
import { BugAntIcon as BugAnt, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import style from './app.module.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { incrementByAmount, setPokemonName } from '../../redux/reducers/counterSlice'
import { usePokemons } from 'src/hooks/usePokemons'
import { capitalFirstLetter } from 'src/utilities/words-utilities'

function App() {
  const { value, name } = useSelector((state: RootState) => state.counter)
  const { pokemon, getPokemonByName } = usePokemons()
  const dispatch = useDispatch()

  return (
    <div className={`${style['container']}`}>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className={`${style['logo']}`} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className={`${style['logo']} ${style['react']}`} alt='React logo' />
        </a>
        {pokemon !== null && (
          <img className={`${style['logo']}`} src={pokemon.sprites.front_default} />
        )}
      </div>
      <h1>
        Vite + React + {pokemon !== null && capitalFirstLetter(pokemon.name)} + heroicons:
        <BugAntIcon fill='#000000' className={`${style['altura2']}`} />
        <BugAnt fill='none' className={`${style['altura2']}`} />
      </h1>
      <div className={`${style['card']}`}>
        <button
          className={`Cypress-button hector-balan ${style['my-button']}`}
          onClick={() => dispatch(incrementByAmount(1))}
        >
          count is {value}
        </button>
        <p></p>
        <input
          className={`cypress-input ${style['input-poke']}`}
          placeholder='enter a name like "pikachu"'
          onChange={(e) => dispatch(setPokemonName(e.target.value))}
          value={name}
        />
        <button
          className='cypress-search-button'
          onClick={() => name !== '' && getPokemonByName(name)}
        >
          <MagnifyingGlassIcon className={`${style['altura']}`} />
        </button>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </div>
  )
}

export default App
