import { Card } from "react-bootstrap";
import css from './CardPro.module.css'
import img from "../../../img/IconPro.png"

function CardPro() {
    return (
        <Card style={{ width: '20rem', padding: '38px' }}>
            <Card.Body>
                <Card.Img className={css.cardImg} src={img} />
                <Card.Title className={css.title}>Professional</Card.Title>  
                <Card.Text className={css.text}>
                    Full service range including technical skills, design.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default CardPro;