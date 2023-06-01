import axios from 'axios';

export function MoreButton(props) {
  return (
    <button
      onClick={() => {
        axios
          .get('https://codingapple1.github.io/shop/data2.json')
          .then((결과) => {
            console.log(결과.data);

            // console.log(props.shoes);
          })
          .catch(() => {
            console.log('실패함 ㅅㄱ');
          });
      }}
    >
      더보기
    </button>
  );
}
