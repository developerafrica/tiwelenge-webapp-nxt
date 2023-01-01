import styles from "../styles/card.module.scss"
import Image from 'next/image'
export default function Card() {
  return (
    <article className={styles.card}>
        <div className={styles.cd}>
            <section>
                <h5>makashouse tiwelenge</h5>
                <h1>just badass</h1>
                <p>10 jan 2023</p>
            </section>
            <section>
                <Image src="/cover.png" alt="cover" width={100} height={98}/>
            </section>
        </div>
    </article>
  )
}
