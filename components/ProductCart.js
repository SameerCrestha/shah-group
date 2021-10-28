import Card from 'react-bootstrap/Card';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function ProductCart({ id, img, title, subTitle }) {
  const router = useRouter();
  return (
    <Card
      className="mb-5  pointer"
      style={{ width: '25rem', backgroundColor: '#C9A67F' }}
      text="dark"
      onClick={() => router.push(`/products/${id}`)}
    >
      <div className="mx-auto px-4 px-sm-3 px-md-4 pt-4 pt-sm-3 pt-md-4  pointer">
        <Image className="pointer" src={img} width={343} height="390" />
      </div>
      <Card.Body className="pointer">
        <Card.Title className="text-center fs-4 pointer">{title}</Card.Title>
        <Card.Text className="text-center pointer">{subTitle}</Card.Text>
      </Card.Body>
    </Card>
  );
}
