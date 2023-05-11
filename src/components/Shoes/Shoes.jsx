import { Row, Col, Container } from 'react-bootstrap';
import 자운드 from '@/assets/자운드.png';
import 뉴발1906 from '@/assets/뉴발1906.png';
import data from '@/components/data';
import { useState } from 'react';

export function Shoes() {
  let [shoes] = useState(data);

  return (
    <Container>
      <Row>
        <Col sm>
          <img src="https://openimage.interpark.com/goods_image_big/8/9/6/9/11014608969_l.jpg" width="80%"></img>
          <h4>{shoes[0].title}</h4>
          <p>{shoes[0].subtitle}</p>
          <p style={{ fontSize: '14px', color: 'gray' }}>{shoes[0].content}</p>
        </Col>
        <Col sm>
          <img src={자운드} width="80%"></img>
          <h4>{shoes[1].title}</h4>
          <p>{shoes[1].subtitle}</p>
          <p style={{ fontSize: '14px', color: 'gray' }}>{shoes[1].content}</p>
        </Col>
        <Col sm>
          <img src={뉴발1906} width="80%"></img>
          <h4>{shoes[2].title}</h4>
          <p>{shoes[2].subtitle}</p>
          <p style={{ fontSize: '14px', color: 'gray' }}>{shoes[2].content}</p>
        </Col>
      </Row>
    </Container>
  );
}
