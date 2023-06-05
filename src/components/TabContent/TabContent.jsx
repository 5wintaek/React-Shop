import { useEffect, useState } from 'react';

export function TabContent({ tab }) {
  const [fade, setFade] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setFade('end');
    }, 10);

    return () => {
      setFade('');
    };
  }, [tab]);
  return (
    <div className={'start ' + fade}>
      {[<div>내용1</div>, <div>내용2</div>, <div>내용3</div>][tab]}
    </div>
  );
}
