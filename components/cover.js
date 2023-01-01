import styles from "../styles/cover.module.scss"
import Image from "next/image"
export default function cover({image, text}) {
  return (
     
        <a href="https://nextjs.org/docs" className={styles.card}>
            <Image src={image} alt="cover" width={150} height={190}/>
            <h2>{text} &rarr;</h2>
        </a>
    
  )
}
