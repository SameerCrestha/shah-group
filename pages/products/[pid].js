import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../../components/layout';
import styles from '../../styles/product-details.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import product_db from '../../public/products/products';

const Products = () => {
  const router = useRouter();
  const { pid } = router.query;
  const product = product_db[pid];

  return product ? (
    <Layout>
      <Container as="section" fluid="xxl" className="py-3 py-md-5 ">
        <Row xs={1} md={2}>
          <Col>
            <div className="text-center">
              <Image src={product.img} width={633} height={799} />
            </div>
          </Col>
          <Col>
            <div>
              <h1>{product.name}</h1>
              <p className="mt-2 mt-md-4">{product.desc1}</p>
              <p className="my-md-4">{product.desc2}</p>

              <ul className="ms-5">
                {product.helights.map((item) => (
                  <li className="ms-5 ">{item}</li>
                ))}
              </ul>

              <p className="fs-4 my-5">Price: {product.price}</p>

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

      <Container as="section" fluid className=" py-md-4 bg-gray">
        <Row>
          <Col>
            <p className="text-center fs-md-4 fs-5">Related Products</p>
          </Col>
        </Row>
        <Row xs={1} sm={2} md={4}>
          {product.relatedProduct.map((id) => (
            <Col>
              <div
                className="text-center mb-2 mb-md-0"
                onClick={() => router.push(`/products/${id}`)}
              >
                {product_db[id].img && (
                  <Image className="pointer" src={product_db[id].img} />
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Layout>
  ) : (
    <div className={styles.spinner}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Products;
