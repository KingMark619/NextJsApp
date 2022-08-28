import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'
import Meta from './Meta' 

const  Layout = ({children}) => {
  return (
    <>
    <Meta/>
    <Nav/>
    <Header/>
    <div className={styles.container}>
        <main className={styles.main}>
            (this is in layout showing on every page because it's wrapped app.js)
            {children}
        </main>
    </div>
    </>
  )
}

export default Layout