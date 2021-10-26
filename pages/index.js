import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import images from '../public/index/sec1card2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import quality from '../public/logos/quality.svg';
import trust from '../public/logos/trust.svg';
import fast from '../public/logos/fast.svg';
import refund from '../public/logos/refund.svg';

import product1 from '../public/index/product1.png';
import product2 from '../public/index/product2.png';
import product3 from '../public/index/product3.png';
import product4 from '../public/index/product4.png';
import product5 from '../public/index/product5.png';
import product6 from '../public/index/product6.png';
import product7 from '../public/index/product7.png';

export default function Home() {
  return (
    <Layout page={1}>
      <section className={styles.section1}>
        <div className={styles.sec1Card1}>
          We Dream To Fulfill Your <span>Business Expectations</span>
          <p>
            Our Company is here to help you with eternal digital experiences.
            Shah Group assures quality services at a reasonable price.
          </p>
        </div>
        <div className={styles.sec1Card2}>
          <Image src={images} placeholder="blur" layout="fill" />
        </div>
        <Link href="/contact-us">
          <a>
            <button className={`${styles.sec1Button} ${styles.button}`}>
              Contact us
            </button>
          </a>
        </Link>
      </section>

      <Container fluid className={styles.section2}>
        <div className={styles.section2_card_section}>
          <div className={styles.section2_card}>
            <div>
              <Image
                src={quality}
                width={112}
                height={112}
                layout="responsive"
              />
            </div>
            <p className="fs-3">QUALITY</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </div>
          <div className={styles.section2_card}>
            <Image src={trust} width={112} height={112} />

            <p className="fs-3">TRUST</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </div>
          <div className={styles.section2_card}>
            <Image src={refund} width={112} height={112} />
            <p className="fs-3">REFUND</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </div>
          <div className={styles.section2_card}>
            <Image src={fast} width={112} height={112} />
            <p className="fs-3">FAST</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </div>
        </div>
        <Row className={`d-none d-sm-block ${styles.section2_first_row}`}></Row>

        <Row className={styles.section2_second_row}>
          <Row className="d-flex align-items-center">
            <Col sm="12" md="6" className="ps-md-5">
              <p className={`fs-2 ${styles.section2_second_row_first_p}`}>
                We advise Ouganizations in value creation startegies
              </p>
            </Col>

            <Col sm="12" md="6">
              <p className={`fs-6 ${styles.section2_second_row_second_p}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis
                sodales odio elit et, euismod faucibus. Nisi, sollicitudin
                pulvinar pulvinar quis orci. Nisl malesuada sed tortor
                tristique. Odio nibh est id amet tincidunt placerat non. Aliquet
                eleifend pellentesque habitant quis pharetra interdum. Ornare
                volutpat diam pretium diam sit massa. Risus volutpat purus
                laoreet faucibus convallis nunc et cursus. Commodo scelerisque.
              </p>
              <Link href="/services">
                <a>
                  <button
                    className={`${styles.button} ${styles.section2_button}`}
                  >
                    Learn More...
                  </button>
                </a>
              </Link>
            </Col>
          </Row>
        </Row>
      </Container>

      <Container fluid className={styles.section3}>
        <Row>
          <Col xs={6} sm={3} className={styles.section3_first_cart}>
            <p className="fs-5 fs-sm-3 fs-m-2">Our</p>
            <p className="fs-5 fs-sm-3 fs-m-2">Products</p>
            <a href="/products">
              <p
                className="fs-6 fs-sm-5"
                style={{ color: '#9FE885' }}
              >{`More>>`}</p>
            </a>
          </Col>
          <Col xs={6} sm={3}>
            <Image src={product1} width="258" height="354" />
          </Col>
          <Col xs={6} sm={3}>
            <Image src={product2} width="258" height="354" />
          </Col>
          <Col xs={6} sm={3}>
            <Image src={product3} width="258" height="354" />
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={3}>
            <Image src={product4} width="258" height="354" />
          </Col>
          <Col xs={6} sm={3}>
            <Image src={product5} width="258" height="354" />
          </Col>
          <Col xs={6} sm={3}>
            <Image src={product6} width="258" height="354" />
          </Col>
          <Col xs={6} sm={3}>
            <Image src={product7} width="258" height="354" />
          </Col>
        </Row>
      </Container>

      <Container fluid className={styles.section4}>
        <Row className="d-flex flex-direction-column align-items-center">
          <p class>Costumer Reviews</p>
          <p>What our costumers are saying...</p>
        </Row>
      </Container>
    </Layout>
  );
}
