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

import peope1 from '../public/index/review_face1.png';
import peope2 from '../public/index/review_face2.png';
import peope3 from '../public/index/review_face3.png';

import wave1 from '../public/index/wave1.png';
import wave2 from '../public/index/wave2.png';
import wave3 from '../public/index/wave3.png';
import wave4 from '../public/index/wave4.png';

import fb from '../public/logos/fb.svg';
import insta from '../public/logos/insta.svg';
import twitter from '../public/logos/twitter.svg';

import Rostal_shah from '../public/index/Rostal_shah.png';
import manager from '../public/index/manager.png';

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
        <Row className={`d-none d-lg-block ${styles.section2_card_section}`}>
          <Col className={`${styles.section2_card} ${styles.section2_card1}`}>
            <Image src={quality} width={112} height={112} />
            <p className="fs-3">QUALITY</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </Col>
          <Col className={`${styles.section2_card} ${styles.section2_card2}`}>
            <Image src={trust} width={112} height={112} />

            <p className="fs-3">TRUST</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </Col>
          <Col className={`${styles.section2_card} ${styles.section2_card3}`}>
            <Image src={refund} width={112} height={112} />
            <p className="fs-3">REFUND</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </Col>
          <Col className={`${styles.section2_card} ${styles.section2_card4}`}>
            <Image src={fast} width={112} height={112} />
            <p className="fs-3">FAST</p>
            <p className="fs-6 text-center">
              We provide our best service to our client, fast efficient and
              reliable
            </p>
            <a href="/services">
              <p className="fs-5">{`More >>`}</p>
            </a>
          </Col>
        </Row>

        <Row className={`d-none d-md-block ${styles.section2_first_row}`}></Row>

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
        <Row>
          <div className="m-auto d-flex flex-column align-items-center">
            <p className="fs-3 fs-sm-2 fs-md-1">Costumer Reviews</p>
            <p className="fs-6">What our costumers are saying...</p>
          </div>
        </Row>

        <Row
          sm={2}
          lg={4}
          className="d-flex justify-content-around align-items-center"
        >
          <Col>
            <div className={`m-auto mb-4 ${styles.section4_card}`}>
              <p className={styles.section4_card_text}>
                Amet tempor consectetur eu sit sit. Eiusmod eiusmod do aute
                occaecat qui eiusmod voluptate esse laborum ex. Elit adipisicing
                proident ea deserunt dolor. Duis proident laboris officia non.
              </p>

              <div className={styles.section4_card_image}>
                <Image src={peope1} width={99} height={99} />
              </div>
              <div className={styles.section4_card_icons}>
                <a href="https://www.facebook.com" target="_blank">
                  <Image className="pointer" src={fb} width={24} height={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Image
                    className="pointer"
                    src={insta}
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Image
                    className="pointer"
                    src={twitter}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className={styles.section4_card_wave}>
                <Image src={wave1} />
              </div>
            </div>
          </Col>
          <Col>
            <div
              className={`m-auto mb-4 ${styles.section4_card} ${styles.section4_card2}`}
            >
              <p className={styles.section4_card_text}>
                Amet tempor consectetur eu sit sit. Eiusmod eiusmod do aute
                occaecat qui eiusmod voluptate esse laborum ex. Elit adipisicing
                proident ea deserunt dolor. Duis proident laboris officia non.
              </p>

              <div className={styles.section4_card_image}>
                <Image src={peope2} width={99} height={99} />
              </div>
              <div className={styles.section4_card_icons}>
                <a href="https://www.facebook.com" target="_blank">
                  <Image className="pointer" src={fb} width={24} height={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Image
                    className="pointer"
                    src={insta}
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Image
                    className="pointer"
                    src={twitter}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className={styles.section4_card_wave}>
                <Image src={wave2} height={210} />
              </div>
            </div>
          </Col>
          <Col>
            <div
              className={`m-auto mb-4 ${styles.section4_card} ${styles.section4_card3}`}
            >
              <p className={styles.section4_card_text}>
                Amet tempor consectetur eu sit sit. Eiusmod eiusmod do aute
                occaecat qui eiusmod voluptate esse laborum ex. Elit adipisicing
                proident ea deserunt dolor. Duis proident laboris officia non.
              </p>

              <div className={styles.section4_card_image}>
                <Image src={peope3} width={99} height={99} />
              </div>
              <div className={styles.section4_card_icons}>
                <a href="https://www.facebook.com" target="_blank">
                  <Image className="pointer" src={fb} width={24} height={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Image
                    className="pointer"
                    src={insta}
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Image
                    className="pointer"
                    src={twitter}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className={styles.section4_card_wave}>
                <Image src={wave3} height={210} />
              </div>
            </div>
          </Col>
          <Col className="d-lg-none">
            <div
              className={`m-auto mb-4 ${styles.section4_card} ${styles.section4_card3}`}
            >
              <p className={styles.section4_card_text}>
                Amet tempor consectetur eu sit sit. Eiusmod eiusmod do aute
                occaecat qui eiusmod voluptate esse laborum ex. Elit adipisicing
                proident ea deserunt dolor. Duis proident laboris officia non.
              </p>

              <div className={styles.section4_card_image}>
                <Image src={peope3} width={99} height={99} />
              </div>
              <div className={styles.section4_card_icons}>
                <a href="https://www.facebook.com" target="_blank">
                  <Image className="pointer" src={fb} width={24} height={24} />
                </a>
                <a href="https://www.instagram.com" target="_blank">
                  <Image
                    className="pointer"
                    src={insta}
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                  <Image
                    className="pointer"
                    src={twitter}
                    width={24}
                    height={24}
                  />
                </a>
              </div>
              <div className={styles.section4_card_wave}>
                <Image src={wave4} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        className="p-2 p-sm-3 p-md-4 p-lg-5"
        style={{ background: '#1D2731' }}
      >
        <Row xs={1} md={2} className="my-5 d-flex  justify-content-start">
          <Col md="4">
            <div className=" d-flex  justify-content-center justify-content-md-start align-items-md-start ">
              <div className=" d-flex flex-column align-items-center">
                <Image src={Rostal_shah} width={321} height={400} />
                <p style={{ fontSize: '0.7rem' }}>Rostal shah (CEO)</p>
              </div>
            </div>
          </Col>
          <Col md="8">
            <div>
              <h2>Vision</h2>
              <p className="mt-3">
                Exercitation nisi aliqua occaecat dolore sunt aliqua elit aliqua
                duis voluptate duis Lorem eu. Laboris reprehenderit ullamco anim
                mollit velit exercitation labore. Pariatur eu labore anim ad
                voluptate consequat et. Ex dolor nostrud ea voluptate aliquip
                sint aliqua cupidatat sunt. Duis qui voluptate commodo ex.
              </p>
              <p>
                Exercitation nisi aliqua occaecat dolore sunt aliqua elit aliqua
                duis voluptate duis Lorem eu. Laboris reprehenderit ullamco anim
                mollit velit exercitation labore. Pariatur eu labore anim ad
                voluptate consequat et. Ex dolor nostrud ea voluptate aliquip
                sint aliqua cupidatat sunt. Duis qui voluptate commodo ex.
              </p>
            </div>
          </Col>
        </Row>
        <Row
          xs={1}
          md={2}
          className="my-5  d-flex flex-md-row-reverse justify-content-end"
        >
          <Col md="4">
            <div className=" d-flex  justify-content-center justify-content-md-start  align-items-md-start">
              <div className=" d-flex flex-column align-items-center">
                <Image src={manager} width={325} height={400} />
                <p style={{ fontSize: '0.7rem' }}>Rostal shah (manager)</p>
              </div>
            </div>
          </Col>

          <Col md="8">
            <div className="d-flex flex-column justify-content-around">
              <h2>Mision</h2>
              <div className="mt-3" style={{ maxWidth: '660px' }}>
                <p>
                  Exercitation nisi aliqua occaecat dolore sunt aliqua elit
                  aliqua duis voluptate duis Lorem eu. Laboris reprehenderit
                  ullamco anim mollit velit exercitation labore. Pariatur eu
                  labore anim ad
                </p>
                <p>
                  Exercitation nisi aliqua occaecat dolore sunt aliqua elit
                  aliqua duis voluptate duis Lorem eu. Laboris reprehenderit
                  ullamco anim mollit velit exercitation labore. Pariatur eu
                  labore anim ad voluptate consequat et. Ex dolor nostrud ea
                  voluptate aliquip sint aliqua cupidatat sunt. Duis qui
                  voluptate commodo ex.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
