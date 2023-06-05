export function TabContent(props) {
  if (props.tab === 0) {
    return <div>내용1</div>;
  }
  if (props.tab === 1) {
    return <div>내용2</div>;
  }
  if (props.tab === 2) {
    return <div>내용3</div>;
  }
}
