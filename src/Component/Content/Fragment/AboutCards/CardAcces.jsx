import { Card } from "react-bootstrap";

function CardAcces() {
    return ( 
    <Card style={{ width: '20rem', padding: '38px', background: 'transparent', paddingTop: "120px", border: '1px solid #F2F2F2' }}>
        <Card.Title style={{fontFamily: '700', fontSize: '24px', color: 'white', lineHeight: '32px', }}>Accessibility</Card.Title>
        <Card.Text style={{color: 'rgba(255, 255, 255, 0.64)', fontFamily: '400', fontSize: '16px',  }}>Business understanding, ability to put themselves.</Card.Text>
    </Card> 
    );
}

export default CardAcces;