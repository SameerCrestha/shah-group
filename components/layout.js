/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from './layout.module.css';
import location from '../public/logos/location.svg';
import mail from '../public/logos/mail.svg';
import phone from '../public/logos/phone.svg';
import twitter from '../public/logos/twitter.svg';
import instagram from '../public/logos/insta.svg';
import facebook from '../public/logos/fb.svg';

import Header from '../components/Header';
export default function Layout({ children, page }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Header />

        {/* <header className={styles.header}>
          <h1 className={styles.headerText}>Shah Group</h1>
          <Link href="/">
            <a className={page == 1 ? styles.active : ''}>Home</a>
          </Link>
          <Link href="/about-us">
            <a className={page == 2 ? styles.active : ''}>About us</a>
          </Link>
          <Link href="/products">
            <a className={page == 3 ? styles.active : ''}>Products</a>
          </Link>
          <Link href="/services">
            <a className={page == 4 ? styles.active : ''}>Services</a>
          </Link>
          <Link href="/contact-us">
            <a className={page == 5 ? styles.active : ''}>Contact us</a>
          </Link>
        </header> */}

        {children}

        <footer className={styles.footer}>
          <hr className={styles.footerLine} />
          <div className={styles.footerSection1}>
            <div className={styles.footerInfo}>
              <h3>Shah Group</h3>
              <div className={styles.footerInfoItem}>
                <Image src={location} height={20} width={15} />
                <div className={styles.footerInfoItemText}>
                  Lokanthali,Bhaktapur
                </div>
              </div>
              <div className={styles.footerInfoItem}>
                <Image src={phone} height={18} width={15} />
                <div className={styles.footerInfoItemText}>9856669377</div>
              </div>
              <div className={styles.footerInfoItem}>
                <Image src={mail} height={13} width={14} />
                <div className={styles.footerInfoItemText}>
                  Shahgroup@gmail.com
                </div>
              </div>
            </div>
            <div className={styles.footerLinks}>
              <div>
                <h4>Site Map</h4>
                <p>
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                  <br />
                  <Link href="/about-us">
                    <a>About us</a>
                  </Link>
                  <br />
                  <Link href="/products">
                    <a>Products</a>
                  </Link>
                  <br />
                  <Link href="/services">
                    <a>Services</a>
                  </Link>
                  <br />
                  <Link href="/contact-us">
                    <a>Contact us</a>
                  </Link>
                  <br />
                </p>
              </div>
              <div>
                <h4>Products</h4>
                <p>
                  <Link href="/">
                    <a>Ghee</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Cardamum</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Palm Oil</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Yarn</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Yarsagumba</a>
                  </Link>
                  <br />
                </p>
              </div>
              <div>
                <h4>Products</h4>
                <p>
                  <Link href="/">
                    <a>Fafar</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Kado</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Tori</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Till</a>
                  </Link>
                  <br />
                  <Link href="/">
                    <a>Acchar</a>
                  </Link>
                  <br />
                </p>
              </div>
            </div>
          </div>
          <div className={styles.footerSection2}>
            <div>Call us: 986475677 | 01-47863936 | 01-567555930</div>
            <div>
              Follow us on:
              <a>
                <Image src={twitter} height={16} width={16}></Image>
              </a>
              <a>
                <Image src={instagram} height={16} width={16}></Image>
              </a>
              <a>
                <Image src={facebook} height={16} width={16}></Image>
              </a>
            </div>
          </div>
          <hr className={styles.footerLine} />
          <div className={styles.footerSection3}>
            <Link href="/">
              <a>Terms of use</a>
            </Link>
            <Link href="/">
              <a>Privacy Policy</a>
            </Link>
            <Link href="/">
              <a>About us</a>
            </Link>
            <Link href="/">
              <a>NewsLetter</a>
            </Link>
            <Link href="/">
              <a>License Footage</a>
            </Link>
            <Link href="/">
              <a>Accesibility</a>
            </Link>
          </div>
          <div className={styles.cpright}>© 2021 Shahgroup.All Rights Reserved.</div>
        </footer>
      </body></>
  );
}
