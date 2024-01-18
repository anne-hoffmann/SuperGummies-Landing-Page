import styles from './page.module.css'
import Navbar from './Navbar/page'
import Hero from './Hero/page'
import Products from './Products/page'
import Contact from './Contact/page'
import Footer from './Footer/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}
