import Link from "next/link";
import Image from "next/image";
import Poke from '../public/images/pokeball.png';
import styles from  '../styles/NavBar.module.css';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src={Poke}
          width={30}
          height={30}
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul className={styles.link_items}>
        <li><Link href={'/'}>Home</Link></li>
        <li><Link href={'/about'}>Sobre</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar