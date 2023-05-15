import { Outlet } from 'react-router-dom';

export function About() {
  return (
    <div>
      <h4>회사정보임</h4>
      <Outlet />
    </div>
  );
}
