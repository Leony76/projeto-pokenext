import type { Pokemon_ } from "@/types/Pokemon"
import Image from "next/image";
import Link from "next/link";

import styles from '../styles/Card.module.css';

const Card = ({pokemon}:Pokemon_) => {

  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
  
  return (
    <div className={styles.card}>
      <Image
        src={image}
        width={150}
        height={150}
        alt={pokemon.name}
      />
      <p className={styles.id}>#{pokemon.id}</p>
      <h3 className={styles.title}>{pokemon.name}</h3>
      <Link className={styles.button} href={`/pokemon/${pokemon.id}`}>Detalhes</Link>
    </div>
  )
}

export default Card