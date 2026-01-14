import type { Pokemon } from "@/types/Pokemon";
import Image from "next/image";

import styles from '../../../styles/Pokemon.module.css';

type Props = {
  params: Promise<{
    pokemon_id: string;
  }>;
};

const Pokemon = async({params}:Props) => {
  const { pokemon_id } = await params;

  const API = 'https://pokeapi.co/api/v2/pokemon';

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon_id}.png`;

  const response = await fetch(`${API}/${pokemon_id}`);
  const pokemon:Pokemon = await response.json();

  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={image}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemon.types.map((item) => (
            <span key={item.slot} className={`${styles.type} ${styles['type_' + item.type.name]}`}>{item.type.name}</span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemon.height * 10} Cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemon.weight / 10} Kg</p>
        </div>
      </div>
    </div>
  )
}

export default Pokemon