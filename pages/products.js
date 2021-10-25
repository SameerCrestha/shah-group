import Image from 'next/image';
import Layout from '../components/layout';
import styles from '../styles/products.module.css';
import ProductCart from '../components/ProductCart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function aboutUs() {
  return (
    <Layout page={3}>
      <section className={styles.section1}>
        <p>
          Without greate
          <span>QUALITY</span>
          it does <span>NOT</span>
          matter <span>WHAT</span>
          something <span>COSTS</span>
        </p>
      </section>

      <Container fluid style={{ backgroundColor: '#1D2731' }}>
        <Row>
          <div
            className="mx-auto text-center my-3"
            style={{ width: 915, maxHeight: 150 }}
          >
            <p className="fs-4 fs-sm-3 fs-md-2">
              Natural Products pure home made, so it tastes too good to be
              healthy
            </p>
          </div>
        </Row>

        <Row className="d-flex justify-content-around">
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row style={{ backgroundColor: '#AA131D', minWidth: '300px' }}>
          <Col className="d-flex flex-column align-items-center">
            <div>
              <p className="fs-5 fs-sm-3 fs-md-1 text-center">
                Grab a cup and seize the day
              </p>
            </div>
            <div>
              <p className="fs-6 fs-sm-4 fs-md-3">High collagen</p>
              <p className="fs-6 fs-sm-4 fs-md-3">High protein</p>
              <p className="fs-6 fs-sm-4 fs-md-3">Big on flavor</p>
            </div>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <div
              style={{
                minWidth: '190px',
                maxWidth: '657px',
                maxHeight: '639px',
              }}
            >
              <Image src={require('../public/products/female.png')} />
            </div>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#D75B98' }}>
          <Col xs>
            <div style={{ maxWidth: '657', maxHeight: '639' }}>
              <Image src={require('../public/products/female.png')} />
            </div>
          </Col>

          <Col> hello</Col>
        </Row>

        <Row className={'text-dark'} style={{ backgroundColor: '#F6EEC7' }}>
          <Col> hello</Col>

          <Col xs>
            <div style={{ maxWidth: '657', maxHeight: '639' }}>
              <Image src={require('../public/products/female.png')} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
