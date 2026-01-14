import Image from "next/image";
import styles from '../../styles/About.module.css';
import charizard from '../../public/images/charizard.png'; 

const page = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vero error, accusamus reiciendis, dolore, ab alias distinctio qui nobis perspiciatis possimus illum mollitia ut! Distinctio asperiores eaque corrupti assumenda tempora?</p>
      <Image
        src={charizard}
        width={300}
        height={300}
        alt="Charizard"
      />
    </div>
  )
}

export default page