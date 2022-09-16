import  React, { useState, useEffect }  from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const axios = require('axios');

function Ads(props) {
    const [ads,setads] = useState({filtered_list:[]});

    useEffect(() => {
        (async ()=>{
        let data= await axios.get('http://localhost:5000/api/filter', { params: { search_text: props.input } });
        setads(
            data.data
        );
        })();
    },[props.input]);

    return (
        <div style={{ display: 'block', padding: 30 }}>
                <Row sm>
                {ads.filtered_list.map((item) => (
                <Col xs={3} key={item._id}>
                <Card style={{ width: '100%', border:'grey solid 1px'}}>
                <Card.Img variant="top" src={item.image_url} />
                <Card.Body>
                    <Card.Title><b>Primary Text :</b> {item.primary_text}</Card.Title>
                    <Card.Title><b>Headline : </b>{item.headline}</Card.Title>
                    <Card.Text>
                    {item.description}
                    </Card.Text>
                    <Button variant="primary">{item.cta}</Button>
                </Card.Body>
                </Card>
                </Col>
                ))}
                </Row>
            </div>
    )
}

export default Ads;






