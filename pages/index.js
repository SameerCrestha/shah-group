import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout page={1}>
      <section className={styles.section1}></section>
    </Layout>
  )
}
