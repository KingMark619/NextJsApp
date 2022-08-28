import {useRouter} from 'next/router'
import {server} from '../../../config'
import Link from 'next/link'

export default function article({article}) {
    // const router = useRouter()
    // const { id } = router.query
  return (
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go back </Link>
    </>
  )
}


// export const getServerSideProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// faster, generated at run time , used for static websites

// export const getStaticProps = async(context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

//     const article = await res.json()

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)

//     const articles = await res.json()
//     const ids = articles.map(article => article.id)

//     const paths = ids.map(id => ({params:{id:id.toString()}}) )
//     return {
//         paths,
//         fallback : false
//     }
// }


export const getStaticProps = async(context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()
    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({params:{id:id.toString()}}) )
    return {
        paths,
        fallback : false
    }
}