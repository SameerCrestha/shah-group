import Image from 'next/image';
import Link from 'next/link';

import Layout from '../../components/layout';
import styles from '../../styles/products_water.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import jar_p from '../../public/products/jar_p.jpg';
import tanker_p from '../../public/products/tanker_p.jpg';
import bottle_p from '../../public/products/bottle_p.jpg';

export default function water() {
  return (
    <Layout page={3}>
      <section className={styles.section1}>
        <div className={styles.descriptionBox}>
          <p> Symbol of </p>
          <p>
            <span> goodness,</span>
          </p>
          <p>
            <span> trust </span>and
          </p>
          <p>
            <span>purity</span>
          </p>
        </div>
      </section>

      <Container as="section" fluid className=" pb-3 py-md-5 bg-gray">
        <Row>
          <h2 className="text-center mb-5">Our services</h2>
        </Row>
        <Row xs={1} lg={2}>
          <Col>
            <div className="text-center">
              <Image
                src={bottle_p}
                width={633}
                height={799}
                alt="water bottle"
                className={styles.image}
              />
            </div>
          </Col>
          <Col>
            <div>
              <h2>Water Bottle</h2>
              <p className="mt-2 mt-md-4">
                Elit incididunt veniam non anim labore nulla. Lorem ut ipsum
                excepteur enim aute eu. Commodo non consequat elit nostrud nisi
                veniam nulla. Ullamco commodo cupidatat adipisicing eiusmod
                exercitation ea occaecat. Adipisicing ipsum esse fugiat dolore
                commodo officia magna id irure. Qui commodo ullamco cupidatat ea
                commodo ullamco Lorem magna elit elit.
              </p>
              <p className="my-md-4">
                Voluptate Lorem id sunt veniam. Ea duis culpa Lorem adipisicing.
                Commodo amet commodo occaecat dolore nulla ex excepteur est sint
                officia fugiat. Officia eiusmod exercitation proident dolor
                nostrud ullamco qui do labore veniam ad irure aute. In elit
                consequat magna sit do deserunt sunt sit culpa occaecat ea. Eu
                sit laborum Lorem Lorem culpa pariatur consequat adipisicing do
                ea fugiat nostrud. Incididunt ex tempor sunt ea cillum.
              </p>

              <ul className="ms-5">
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
              </ul>

              <p className="fs-4 my-5">Price: Rs 25</p>

              <Link href="/contact-us" className="mt-5">
                <a>
                  <button className={`${styles.sec1Button} ${styles.button}`}>
                    Contact us
                  </button>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row xs={1} lg={2} className="d-flex flex-md-row-reverse my-5  gx-5">
          <Col>
            <div className="text-center">
              <Image
                src={jar_p}
                width={633}
                height={799}
                alt="water jar"
                className={styles.image}
              />
            </div>
          </Col>
          <Col>
            <div>
              <h2>Water Jar</h2>
              <p className="mt-2 mt-md-4">
                Elit incididunt veniam non anim labore nulla. Lorem ut ipsum
                excepteur enim aute eu. Commodo non consequat elit nostrud nisi
                veniam nulla. Ullamco commodo cupidatat adipisicing eiusmod
                exercitation ea occaecat. Adipisicing ipsum esse fugiat dolore
                commodo officia magna id irure. Qui commodo ullamco cupidatat ea
                commodo ullamco Lorem magna elit elit.
              </p>
              <p className="my-md-4">
                Voluptate Lorem id sunt veniam. Ea duis culpa Lorem adipisicing.
                Commodo amet commodo occaecat dolore nulla ex excepteur est sint
                officia fugiat. Officia eiusmod exercitation proident dolor
                nostrud ullamco qui do labore veniam ad irure aute. In elit
                consequat magna sit do deserunt sunt sit culpa occaecat ea. Eu
                sit laborum Lorem Lorem culpa pariatur consequat adipisicing do
                ea fugiat nostrud. Incididunt ex tempor sunt ea cillum.
              </p>

              <ul className="ms-5">
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
              </ul>

              <p className="fs-4 my-5">Price: Rs 50</p>

              <Link href="/contact-us" className="mt-5">
                <a>
                  <button className={`${styles.sec1Button} ${styles.button}`}>
                    Contact us
                  </button>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
        <Row xs={1} lg={2}>
          <Col>
            <div className="text-center">
              <Image
                src={tanker_p}
                width={633}
                height={799}
                alt="water tanker"
                className={styles.image}
              />
            </div>
          </Col>
          <Col>
            <div>
              <h2>Water Tanker</h2>
              <p className="mt-2 mt-md-4">
                Elit incididunt veniam non anim labore nulla. Lorem ut ipsum
                excepteur enim aute eu. Commodo non consequat elit nostrud nisi
                veniam nulla. Ullamco commodo cupidatat adipisicing eiusmod
                exercitation ea occaecat. Adipisicing ipsum esse fugiat dolore
                commodo officia magna id irure. Qui commodo ullamco cupidatat ea
                commodo ullamco Lorem magna elit elit.
              </p>
              <p className="my-md-4">
                Voluptate Lorem id sunt veniam. Ea duis culpa Lorem adipisicing.
                Commodo amet commodo occaecat dolore nulla ex excepteur est sint
                officia fugiat. Officia eiusmod exercitation proident dolor
                nostrud ullamco qui do labore veniam ad irure aute. In elit
                consequat magna sit do deserunt sunt sit culpa occaecat ea. Eu
                sit laborum Lorem Lorem culpa pariatur consequat adipisicing do
                ea fugiat nostrud. Incididunt ex tempor sunt ea cillum.
              </p>

              <ul className="ms-5">
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
                <li className="ms-5 ">lorem</li>
              </ul>

              <p className="fs-4 my-5">Price: Rs 1500</p>

              <Link href="/contact-us" className="mt-5">
                <a>
                  <button className={`${styles.sec1Button} ${styles.button}`}>
                    Contact us
                  </button>
                </a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="p-3 p-lg-5">
        <Row
          xs={1}
          md={2}
          className="border border-white m-1 p-1 p-sm-2 p-md-3 "
        >
          <Col md={4}>
            <Image
              src={bottle_p}
              width={479}
              height={326}
              alt="water bottle"
              className={styles.image}
            />
          </Col>
          <Col md={8}>
            <h2>Quality Test</h2>
            <p className="pt-4">
              We follow a strict quality code which is in line with the
              International standards while manufacturing our products.
              Scientifically advanced and rigorous procedures are followed at
              our state-of-the-art laboratories to ensure that our consumers
              always receive pure, safe and healthy drinking water.
            </p>
          </Col>
        </Row>
        <Row
          xs={1}
          md={2}
          className="border border-white m-1 p-1 p-sm-2 p-md-3 my-3 gx-5"
        >
          <Col md={4}>
            <Image
              src={jar_p}
              width={479}
              height={326}
              alt="water jar"
              className={styles.image}
            />
          </Col>
          <Col md={8}>
            <h2>Purification Process</h2>
            <p className="pt-4">
              Every water bottle goes through a rigorous 10 stage quality
              process for you to get guaranteed purity in every drop. We
              incorporate world-class water purification methods such as
              Ozonisation, Reverse Osmosis, Micron Filtration and more, and this
              is why we are ahead of the curve in terms of water quality.
            </p>
          </Col>
        </Row>
        <Row
          xs={1}
          md={2}
          className="border border-white m-1 p-1 p-sm-2 p-md-3 gx-5"
        >
          <Col md={4}>
            <Image
              src={tanker_p}
              width={479}
              height={326}
              alt="water tanker"
              className={styles.image}
            />
          </Col>
          <Col md={8}>
            <h2>Water Source</h2>
            <p className="pt-4">
              Mollit quis ad sit cillum esse velit pariatur exercitation sunt
              proident minim quis. Id laboris laborum et laboris pariatur sit
              consequat incididunt irure veniam excepteur cillum veniam nulla.
              Magna adipisicing ipsum voluptate commodo tempor nulla laborum
              reprehenderit laboris ut minim aute occaecat irure. Ad incididunt
              do eu qui nisi eu sit laboris excepteur non aliquip.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
