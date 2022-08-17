import Card from 'react-bootstrap/Card';
import css from './CardFeatures.module.css'

function CardFeatures() {
  return (
    <Card style={{ width: '30rem', background: 'transparent', borderRadius: 0 }} >
      <Card.Body style={{borderRadius: 0}}>
        <Card.Title className={css.title}>Features</Card.Title>
        <Card.Subtitle className={css.subtitle}>Custom Web Design</Card.Subtitle>
        <Card.Link className={css.link}href="#">Read more</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardFeatures;