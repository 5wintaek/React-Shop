import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import data from '@/components/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoreButton } from '..';

export function Shoes() {
  let [shoes, setShoes] = useState(data);
  return (
    <Container>
      <div className="main-bg"></div>
      <Row>
        <Col sm>
          {shoes.map((item, index) => {
            return (
              <div key={index}>
                <Link to={`detail/${index}`}>
                  <img src={item.imageUrl} width="40%" alt={item.title}></img>
                </Link>
                <h4>{item.title}</h4>
                <h4>{item.subtitle}</h4>
                <p style={{ fontSize: '14px', color: 'gray' }}>{item.content}</p>
              </div>
            );
          })}
        </Col>
      </Row>
      <MoreButton shoes={shoes} setShoes={setShoes} />
    </Container>
  );
}
