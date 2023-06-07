'use client'
import { Card } from 'antd';
const { Meta } = Card;
const BookCard = (props) => (
  <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={<img alt="example" src={props.url} />}
  >
    <Meta title={props.title} description={props.author} />
  </Card>
);
export default BookCard;