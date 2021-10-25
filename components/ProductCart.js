import Card from 'react-bootstrap/Card';
import Image from 'next/image';

export default function ProductCart({ img, title, subTitle }) {
  return (
    <Card
      className="mb-4"
      style={{ width: '25rem', backgroundColor: '#C9A67F' }}
      text="dark"
    >
      <div className="mx-auto" style={{ width: '343', height: '390' }}>
        <Image src={img} />
      </div>
      <Card.Body>
        <Card.Title className="text-center" size>
          {title}
        </Card.Title>
        <Card.Text className="text-center">{subTitle}</Card.Text>
      </Card.Body>
    </Card>
  );
}
