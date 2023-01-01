import Head from 'next/head'
import Image from 'next/image'
import Card from "../components/Card"
import styles from '../styles/Home.module.scss'
import Cover from "../components/cover"


export default function Home() {
  let data = [
    {
      img:'/cover1.png',
      txt:'naruto'
    },
    {
      img:'/cover2.png',
      txt:'naruto'
    },
    {
      img:'/cover3.png',
      txt:'naruto'
    },
    {
      img:'/cover4.png',
      txt:'naruto'
    },
    {
      img:'/cover5.png',
      txt:'naruto'
    },
    {
      img:'/cover6.png',
      txt:'naruto'
    },
  ]
  return (
    <div className={styles.container}>
      <Head>
        <title>TIWELENGE</title>
        <meta name="description" content="tiwelenge book app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className={styles.mainPage}>
        <header>
          <form >
            <div className="formGroup">
              <input type="search" name="search" id="search" />
              <button type="submit">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path  d="M11 17C7.54386 17 5 14.4561 5 11C5 7.54386 7.54386 5 11 5C14.4561 5 17 7.54386 17 11C17 14.4561 14.4561 17 11 17ZM11 19C15.4386 19 19 15.4386 19 11C19 6.5614 15.4386 3 11 3C6.5614 3 3 6.5614 3 11C3 15.4386 6.5614 19 11 19ZM20.7018 19.2982L16.7018 15.2982C16.5263 15.1053 16.2807 15 16 15C15.4561 15 15 15.4561 15 16C15 16.2807 15.1053 16.5263 15.2982 16.7018L19.2982 20.7018C19.4737 20.8947 19.7193 21 20 21C20.5439 21 21 20.5439 21 20C21 19.7193 20.8947 19.4737 20.7018 19.2982Z" fill="black"/>
                </svg>
              </button>
            </div>
          </form>
        </header>
        <main className={styles.indexMain}>
          <section className={styles.cardSlide}>
            <Card />
          </section>
          <section className={styles.welcome}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">TIWELENGE</a>
            </h1>
          </section>
          <section className={styles.bookSlide}>
            <div className={styles.grid}>
              <Cover image={'/cover1.png'} text="aquaman"/>
              <Cover image={'/cover2.png'} text="naruto"/>
              <Cover image={'/cover3.png'} text="ironman"/>
              <Cover image={'/cover1.png'} text="atlantis"/>
              <Cover image={'/cover4.png'} text="unexpected"/>
              <Cover image={'/cover5.png'} text="flash"/>
              <Cover image={'/cover6.png'} text="kid aqua"/>
            </div>
          </section>
        </main>
        <footer></footer>
      </article>
      <footer className={styles.footer}>
        <a
          href="https://github.com/developerafrica"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <span>
            <Image src="/logo.png" alt="developer africa mw" width={20} height={20} />
            </span>
            <span>
              DEVELOPER AFRICA MW
            </span>
          </span>
        </a>
      </footer>
    </div>
  )
}
