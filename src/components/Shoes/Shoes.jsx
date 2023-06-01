import { Row, Col, Container } from 'react-bootstrap';
import data from '@/components/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoreButton } from '..';

export function Shoes() {
  let [shoes, setShoes] = useState(data);
  return (
    <>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm>
            {shoes.map((item, index) => {
              return (
                <div key={index} sm>
                  <Link to={`detail/${index}`}>
                    <img src={item.imageUrl} width="50%" alt={item.title}></img>
                  </Link>
                  <h4>{item.title}</h4>
                  <h4>{item.subtitle}</h4>
                  <p style={{ fontSize: '14px', color: 'gray' }}>{item.content}</p>
                </div>
              );
            })}
          </Col>
        </Row>
        <MoreButton shoes={shoes} />
      </Container>
    </>
  );
}
