import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import images from '../public/index/sec1card2.png';
export default function Home() {
  return ( 
    <Layout page={1}>
      <section className={styles.section1}>
        <div className={styles.sec1Card1}>
          We Dream To Fulfill Your <span >Business Expectations</span>
          <p >Our Company is here to help you with eternal digital experiences.
           Shah Group assures quality services at a reasonable price.</p>
        </div>
        <div className={styles.sec1Card2}>
          <Image src={images} placeholder="blur" layout="fill"/>
        </div>
        <Link href="/contact-us" ><a><button className={styles.sec1Button}>Contact us</button></a></Link>
      </section>
      
    </Layout>
  )
}
