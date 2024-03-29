import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/Home.module.css';
import images from '../public/index/sec1card2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import background from "../public/index/section1.webp";
import services from "../public/index/services.png";
import quality from '../public/logos/quality.svg';
import trust from '../public/logos/trust.svg';
import fast from '../public/logos/fast.svg';
import refund from '../public/logos/refund.svg';

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

import product_db from '../public/products/products';

export default function Home() {
  return (
    <Layout page={1} className={styles.body}>
      <section className={styles.section1}>
      <Image className={styles.background} src={background} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur"  quality={100}/>
        <div className={styles.sec1Card1}>
          We Dream To Fulfill Your <span>Business Expectations</span>
          <p>
            Our Company is here to help you with eternal digital experiences.
            Shah Group assures quality services at a reasonable price.
          </p>
        </div>
        <div className={styles.sec1Card2}>
          <Image src={images} placeholder="blur" layout="responsive"  />
        </div>
        <Link href="/contact-us">
          <a>
            <button className={`${styles.sec1Button} ${styles.button}`}>
              Contact us
            </button>
          </a>
        </Link>
      </section>

      <Container as="section" fluid className={styles.section2}>
        
        <Row className={`d-none d-lg-block ${styles.section2_card_section}`}>
          <Col className={`${styles.section2_card} ${styles.section2_card1}`}>
            <Image src={quality} width={112} height={112} quality={50}/>
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
            <Image src={trust} width={112} height={112} quality={50} />

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
            <Image src={refund} width={112} height={112} quality={50} />
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
            <Image src={fast} width={112} height={112} quality={50}/>
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

        <Row className={`d-none d-md-block ${styles.section2_first_row}`}>
        <Image className={styles.background} src={services} layout="fill" objectFit="cover" objectPosition="center" placeholder="blur" priority={false} quality={50}/>
        </Row>

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

      <Container as="section" fluid className={styles.section3}>
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
            <Link href="/products/1">
              <Image
                className="pointer"
                src={product_db[1].img}
                width="258"
                height="354"
              />
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link href="/products/2">
              <Image
                className="pointer"
                src={product_db[2].img}
                width="258"
                height="354"
              />
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link href="/products/3">
              <Image
                className="pointer"
                src={product_db[3].img}
                width="258"
                height="354"
              />
            </Link>
          </Col>
        </Row>
        <Row>
          <Col xs={6} sm={3}>
            <Link href="/products/4">
              <Image
                className="pointer"
                src={product_db[4].img}
                width="258"
                height="354"
              />
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link href="/products/5">
              <Image
                className="pointer"
                src={product_db[5].img}
                width="258"
                height="354"
              />
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link href="/products/6">
              <Image
                className="pointer"
                src={product_db[6].img}
                width="258"
                height="354"
              />
            </Link>
          </Col>
          <Col xs={6} sm={3}>
            <Link href="/products/7">
              <Image
                className="pointer"
                src={product_db[7].img}
                width="258"
                height="354"
              />
            </Link>
          </Col>
        </Row>
      </Container>

      <Container as="section" fluid className={styles.section4}>
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
        as="section"
        fluid
        className="p-2 p-sm-3 p-md-4 p-lg-5 bg-gray"
      >
        <Row xs={1} md={2} className="my-5 d-flex  justify-content-start">
          <Col md="5">
            <div className=" d-flex  justify-content-center justify-content-md-start align-items-md-start ">
              <div className=" d-flex flex-column align-items-center">
                <Image src={Rostal_shah} width={563} height={700} />
                <p style={{ fontSize: '0.7rem' }}>Rostal shah (CEO)</p>
              </div>
            </div>
          </Col>
          <Col md="7">
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
            <div className="d-md-none  d-lg-flex flex-column justify-content-around">
              <h2>Mision</h2>
              <div className="mt-3">
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
        <Row className="d-none d-md-block d-lg-none">
          <Col>
            <div className="d-lg-flex flex-column justify-content-around">
              <h2>Mision</h2>
              <div className="mt-3">
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
