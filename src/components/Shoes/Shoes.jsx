import { Row, Col, Container } from 'react-bootstrap';
import data from '@/components/data';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Shoes(...restProps) {
  let [shoes] = useState(data);
  return (
    <Container>
      <div className="main-bg"></div>
      <Row>
        <Col sm>
          <Link to={'detail/0'}>
            <img src={shoes[0].imageUrl} width="80%"></img>
          </Link>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].subtitle}</p>
          <p style={{ fontSize: '14px', color: 'gray' }}>{shoes[0].content}</p>
        </Col>
        <Col sm>
          <Link to={'detail/1'}>
            <img src={shoes[1].imageUrl} width="80%"></img>
          </Link>
          <h4>{shoes[1].title}</h4>
          <p>{shoes[1].subtitle}</p>
          <p style={{ fontSize: '14px', color: 'gray' }}>{shoes[1].content}</p>
        </Col>
        <Col sm>
          <Link to={'detail/2'}>
            <img src={shoes[2].imageUrl} width="80%"></img>
          </Link>
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].subtitle}</p>
          <p style={{ fontSize: '14px', color: 'gray' }}>{shoes[2].content}</p>
        </Col>
      </Row>
    </Container>
  );
}
