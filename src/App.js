import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Navbar, Container, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">Wintaek</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Row>
          <Col sm>
            <img src="https://openimage.interpark.com/goods_image_big/8/9/6/9/11014608969_l.jpg" width="80%"></img>
            <h4>Adidas</h4>
            <p>Adidas Samba ADV Cardboard</p>
            <p style={{ fontSize: '14px', color: 'gray' }}>아디다스 삼바 ADV 카드보드</p>
          </Col>
          <Col sm>
            <img src="https://openimage.interpark.com/goods_image_big/8/9/6/9/11014608969_l.jpg" width="80%"></img>
            <h4>Adidas</h4>
            <p>Adidas Samba ADV Cardboard</p>
            <p style={{ fontSize: '14px', color: 'gray' }}>아디다스 삼바 ADV 카드보드</p>
          </Col>
          <Col sm>
            <img src="https://openimage.interpark.com/goods_image_big/8/9/6/9/11014608969_l.jpg" width="80%"></img>
            <h4>Adidas</h4>
            <p>Adidas Samba ADV Cardboard</p>
            <p style={{ fontSize: '14px', color: 'gray' }}>아디다스 삼바 ADV 카드보드</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
