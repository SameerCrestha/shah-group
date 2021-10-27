import { useRouter } from 'next/router';
import Image from 'next/image';
import Layout from '../../components/layout';
import styles from '../../styles/product-details.module.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Products = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <Container fluid>
        <Row>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Products;
