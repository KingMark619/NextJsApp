import Head from 'next/head'
import ArticleList from '../components/ArticleList'
import styles from '../styles/Layout.module.css'
import {server} from '../config'


export default function Home({articles}) {
  return (
    <div className={styles.container}>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="King Mark's first NextJS App" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}

      <ArticleList articles={articles} />
    </div>
  )
}
// fetch at build time

// export const getStaticProps = async () => {
//   const res = await fetch (`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }
// }

//get from api folder and previously set up routes

export const getStaticProps = async () => {
  const res = await fetch (`${server}/api/articles`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }
}