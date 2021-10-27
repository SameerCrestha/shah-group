import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/layout';
import styles from '../../styles/products.module.css';
import ProductCart from '../../components/ProductCart';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import star from '../../public/logos/star.svg';
import verified from '../../public/logos/verified.svg';

export default function products() {
  const router = useRouter();

  return (
    <Layout page={3}>
      <section className={styles.section1}>
        <div className={styles.descriptionBox}>
          <p> Without greate</p>
          <p>
            <span>QUALITY</span>
          </p>
          <p>
            it does <span>NOT</span>
          </p>
          <p>
            matter <span>WHAT</span>
          </p>
          <p>
            something <span>COSTS</span>
          </p>
        </div>
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
              img={require('../../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
          <Col xs sm="6" md="4" className="d-flex justify-content-around">
            <ProductCart
              img={require('../../public/products/ghee.png')}
              title="Nandi Ghee"
              subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar lacus, cursus nisi ut. Urna, sit sed proin adipiscing vestibulum odio. In morbi."
            />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Row style={{ backgroundColor: '#AA131D', minWidth: '300px' }}>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div
              className="mb-md-5 mb-xs-1 mb-sm-2"
              style={{ maxWidth: '424px' }}
            >
              <p className="fs-5 fs-sm-3 fs-md-1 text-center">
                Grab a cup and seize the day
              </p>
            </div>
            <div>
              <p className="fs-6 fs-sm-5 fs-md-3">High collagen</p>
              <p className="fs-6 fs-sm-5 fs-md-3">High protein</p>
              <p className="fs-6 fs-sm-5 fs-md-3">Big on flavor</p>
            </div>
            <Button
              className="mb-1"
              variant="dark"
              onClick={() => router.push('/contact-us')}
            >
              Contact us
            </Button>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <div
              style={{
                minWidth: '190px',
                maxWidth: '657px',
                maxHeight: '639px',
              }}
            >
              <Image src={require('../../public/products/female.png')} />
            </div>
          </Col>
        </Row>

        <Row style={{ backgroundColor: '#D75B98' }}>
          <Col className="d-flex align-items-center justify-content-center">
            <div
              style={{
                minWidth: '190px',
                maxWidth: '657px',
                maxHeight: '639px',
              }}
            >
              <Image src={require('../../public/products/female.png')} />
            </div>
          </Col>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div
              className="mb-md-5 mb-xs-1 mb-sm-2"
              style={{ maxWidth: '424px' }}
            >
              <p className="fs-5 fs-sm-3 fs-md-1 text-center">
                Grab a cup and seize the day
              </p>
            </div>
            <div>
              <p className="fs-6 fs-sm-5 fs-md-3">High collagen</p>
              <p className="fs-6 fs-sm-5 fs-md-3">High protein</p>
              <p className="fs-6 fs-sm-5 fs-md-3">Big on flavor</p>
            </div>

            <Button
              className="mb-1"
              variant="dark"
              onClick={() => router.push('/contact-us')}
            >
              Contact us
            </Button>
          </Col>
        </Row>

        <Row className={'text-dark'} style={{ backgroundColor: '#F6EEC7' }}>
          <Col className="d-flex flex-column align-items-center justify-content-center">
            <div
              className="mb-md-5 mb-xs-1 mb-sm-2"
              style={{ maxWidth: '424px' }}
            >
              <p className="fs-5 fs-sm-3 fs-md-1 text-center">
                Grab a cup and seize the day
              </p>
            </div>
            <div>
              <p className="fs-6 fs-sm-5 fs-md-3">High collagen</p>
              <p className="fs-6 fs-sm-5 fs-md-3">High protein</p>
              <p className="fs-6 fs-sm-5 fs-md-3">Big on flavor</p>
            </div>
            <Button
              className="mb-1"
              variant="dark"
              onClick={() => router.push('/contact-us')}
            >
              Contact us
            </Button>
          </Col>

          <Col className="d-flex align-items-center justify-content-center">
            <div
              style={{
                minWidth: '190px',
                maxWidth: '657px',
                maxHeight: '639px',
              }}
            >
              <Image src={require('../../public/products/female.png')} />
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="pt-5" style={{ backgroundColor: '#000' }}>
        <Row className="mt-5 d-flex justify-content-around">
          <Col
            xs
            sm={4}
            className="d-flex flex-column align-items-center mb-5"
            style={{ maxWidth: '402px', minWidth: '292px' }}
          >
            <div>
              <Image src={star} width={238} height={37} />
            </div>
            <p className="text-center">
              “I love it and use it to cook with. Great for soups, stirs fries.”
            </p>
            <p>-Binod karki</p>
            <div>
              <Image src={verified} width={238} height={37} />
            </div>
          </Col>
          <Col
            xs
            sm={4}
            className="d-flex flex-column align-items-center mb-5"
            style={{ maxWidth: '402px', minWidth: '292px' }}
          >
            <div>
              <Image src={star} width={238} height={37} />
            </div>
            <p className="text-center">
              “I love it and use it to cook with. Great for soups, stirs fries.”
            </p>
            <p>-Binod karki</p>
            <div>
              <Image src={verified} width={238} height={37} />
            </div>
          </Col>
          <Col
            xs
            sm={4}
            className="d-flex flex-column align-items-center mb-5"
            style={{ maxWidth: '402px', minWidth: '292px' }}
          >
            <div>
              <Image src={star} width={238} height={37} />
            </div>
            <p className="text-center">
              “I love it and use it to cook with. Great for soups, stirs fries.”
            </p>
            <p>-Binod karki</p>
            <div>
              <Image src={verified} width={238} height={37} />
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
