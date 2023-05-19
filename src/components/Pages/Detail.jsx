import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

export function Detail(props) {
  const { id } = useParams();
  const photo = props.shoes.find((item) => item.id === parseInt(id));
  const [showAlert, setAlert] = useState(true);
  // console.log(photo);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
      console.log(1);
    }, 2000);

    return () => {
      console.log(2);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      {showAlert && <div className="alert alert-warning">2초이내 구매시 할인</div>}
      <div className="row">
        <div className="col-md-6">
          <img src={photo.imageUrl} alt={photo.title} width="80%" />
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

const Content = styled.p`
  font-size: 14px;
  color: gray;
`;

const Button = styled.button`
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg === 'blue' ? 'yellow' : 'white')}
  padding: 10px;
`;
