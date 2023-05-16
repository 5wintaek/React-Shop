import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const Content = styled.p`
  font-size: 14px;
  color: gray;
`;

const Button = styled.button`
  background: ${(props) => props.bg};
  color: black;
  padding: 10px;
`;

export function Detail(props) {
  let { id } = useParams();
  console.log(id);

  return (
    <div className="container">
      <Button bg="blue">벌튼</Button>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].subtitle}</p>
          <Content>{props.shoes[id].content}</Content>
          <p>{props.shoes[id].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}
