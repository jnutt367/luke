import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
      <title>The Gospel of Luke </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The Gospel of <a href="#"> Luke</a>
        </h1>

        <p className={styles.description}>
          
          <code className={styles.publisher}>Each Card contains a chapter in Luke's gospel </code>
        </p>

        <div className={styles.grid}>
        <a href="#" className={styles.card}>
            <h2>Chapter 1 &darr;</h2>
            <p>This card will hold the full content of chapter 1</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Chapter 2 &darr;</h2>
            <p>This card will hold the full content of chapter 2</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 3 &darr;</h2>
            <p>This card will hold the full content of chapter 3</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 4 &darr;</h2>
            <p>
            This card will hold the full content of chapter 4
            </p>
          </a>
          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 5 &darr;</h2>
            <p>
            This card will hold the full content of chapter 5
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 6 &darr;</h2>
            <p>
            This card will hold the full content of chapter 6
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 7 &darr;</h2>
            <p>
            This card will hold the full content of chapter 7
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 8 &darr;</h2>
            <p>
            This card will hold the full content of chapter 8
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 9 &darr;</h2>
            <p>
            This card will hold the full content of chapter 9
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 10 &darr;</h2>
            <p>
            This card will hold the full content of chapter 10
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 11 &darr;</h2>
            <p>
            This card will hold the full content of chapter 11
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 12 &darr;</h2>
            <p>
            This card will hold the full content of chapter 12
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 13 &darr;</h2>
            <p>
            This card will hold the full content of chapter 13
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 14 &darr;</h2>
            <p>
            This card will hold the full content of chapter 14
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 15 &darr;</h2>
            <p>
            This card will hold the full content of chapter 15
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 16 &darr;</h2>
            <p>
            This card will hold the full content of chapter 16
            </p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Chapter 17 &darr;</h2>
            <p>This card will hold the full content of chapter 17</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Chapter 18 &darr;</h2>
            <p>This card will hold the full content of chapter 18</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 19 &darr;</h2>
            <p>This card will hold the full content of chapter 19</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 20 &darr;</h2>
            <p>
            This card will hold the full content of chapter 20
            </p>
          </a>
          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 21 &darr;</h2>
            <p>
            This card will hold the full content of chapter 21
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 22 &darr;</h2>
            <p>
            This card will hold the full content of chapter 22
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 23 &darr;</h2>
            <p>
            This card will hold the full content of chapter 23
            </p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h2>Chapter 24 &darr;</h2>
            <p>
            This card will hold the full content of chapter 24
            </p>
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
