import type { Pokemon } from '@/types/Pokemon';
import pokeBall from '../public/images/pokeball.png';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import Card from '../components/Card';

export default async function Home() {
  const maxPokemons = 251;
  const API = 'https://pokeapi.co/api/v2/pokemon';

  const response = await fetch(`${API}/?limit=${maxPokemons}`);
  const data = await response.json();

  // add pokemon index
  data.results.forEach((item: Pokemon, index:number) => {
    item.id = index + 1
  })

  const pokemons = data.results;
  
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>Poke<span>Next</span></h1>
        <Image
          src={pokeBall}
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon: Pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon}/>
        ))}
      </div>
    </>
  );
}
